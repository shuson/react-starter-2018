import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Link } from 'react-router-dom'
import {hasPermission } from '../../../util'

import style from './index.scss'

const BarItem = ({isActive, isCollaps, subItems,
  linkTo, onActiveItemChange,
  authentication, text, faIcon}) => {

  const hasSubItem = subItems.length > 0

  let subItemElements = []
  subItems.forEach((subItem, i) => {
    if(hasPermission(authentication, subItem['modu'], subItem['func'])) {
      subItemElements.push(<li key={i}>
        <Link to={{
          pathname: subItem.link,
          state: {
            pagename: subItem.text
          }
        }}>
          {subItem.text}
        </Link>
      </li>)
    }
  })

  let parentElement = hasSubItem ? <div>
      <i className={classnames('fa', faIcon)}></i>
      <i className={classnames('fa fa-angle-right', 'pull-right')}></i>
      <br />
      <span className={style.parentText}>{text}</span>
      
    </div> : 
    (<Link to={{
      pathname: linkTo,
      state: {
        pagename: text
      }
    }}>
    <i className={classnames('fa', faIcon)}></i>
    <br />
    <span className={style.parentText}>{text}</span>
  </Link>)

  return (
  <li className={classnames(isCollaps? style.accordionCollaps : style.accordion, isActive? style.active : '')}
    onClick={onActiveItemChange}
  >
    {parentElement}
    { hasSubItem ? 
      <ul className={classnames("list-unstyled", style.subMenu)} 
        style={{marginLeft: isCollaps? '70px' : '130px', marginTop: isCollaps ? '-38px' : '-55px'}}>
        {subItemElements}
      </ul> : null
    }
  </li>)
}

BarItem.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  faIcon: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func,
  isActive: PropTypes.bool,
  isCollaps: PropTypes.bool,
  subItems: PropTypes.array
};

BarItem.defaultProps = {
  subItems: []
}

export default BarItem;