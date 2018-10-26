import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import onClickOutside from "react-onclickoutside"

import style from './index.scss'

class Dropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)
  }

  state = {
    isShown: false
  }

  toggleDropdown = () => {
    this.setState({
      ...this.state,
      isShown: !this.state.isShown
    })
  }

  onOptionClick = option => {
    const {handleValueChange} = this.props;
    if (handleValueChange) {
      handleValueChange(option);
    }

    this.toggleDropdown();
  }

  handleClickOutside = evt => {
    this.setState({
      isShown: false
    })
  };

  render() {
    const {dropdownValue, dropdownOptions} = this.props;

    if (!dropdownValue || !dropdownOptions) {
      return null;
    }

    const {isShown} = this.state
    const valueIndicator = generateColorIndicator(dropdownValue.id)

    let optionsWithIndictor = []
    let dropdownDisplayValue = dropdownValue.name
    dropdownOptions.forEach((option, i) => {
      const optionIndictor = generateColorIndicator(option.id)
      optionsWithIndictor.push(
        <a key={`dropdow-${i}`} className={style.dropdownItem} href="javascript:void(0)" onClick={() => this.onOptionClick(option)}>
          {optionIndictor}
          {option.name}
        </a>
      )

      if(option.id === dropdownValue.id) {
        dropdownDisplayValue = option.name
      }
    })

    return (
      <div className={classnames('dropdown', style.wrapper)}>
        <div className={classnames(style.dropdownBtn)} onClick={this.toggleDropdown}>
          {valueIndicator}
          {dropdownDisplayValue}
          <i className={classnames('pull-right', 'fa fa-caret-down')}></i>
        </div>
        <div className={classnames(style.dropdownMenu)} style={{display: isShown? 'block': 'none'}}>
          {optionsWithIndictor}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  dropdownValue: PropTypes.any.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  dropdownOptions: PropTypes.array.isRequired
};

const generateColorIndicator = (value) => {
  let color = '#ffffff00';
  switch(_.toLower(value)) {
    case "alerts":
      color = '#0C8ED7'
      break;
    case "conversion":
      color = '#8971E9'
      break;
    case "str":
      color = "#e85252"
      break;
    case "no issue":
      color = "#9ed85b"
      break
    case "issue":
      color = "#FF934F"
      break
    default:
      break
  }

  return (<i className={classnames(style.dotIndicator)} style={{background: color}}></i>)
}

export default onClickOutside(Dropdown);
