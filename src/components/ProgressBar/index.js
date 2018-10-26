import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './index.scss'

class ProgressBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {value} = this.props;

    if (!value) {
      return null;
    }

    const numericValue = parseFloat(value);
    const primaryColor = "#e85252";
    return (
      <div className={style.progressBarWrapper}>
        <svg viewBox="0 0 100 4" preserveAspectRatio="none" style={{width: "100%", height: "100%"}}>
          <path d="M 0,2 L 100,2" stroke=" #dfe8f0" strokeWidth="4" fillOpacity="0"></path>
          <path d="M 0,2 L 100,2" stroke={primaryColor} strokeWidth="4" fillOpacity="0" 
            style={{strokeDasharray: "100, 100", strokeDashoffset: (100-numericValue)}}></path>
        </svg>
        <div className={style.progressbarText}>
          {value}
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {

};

export default ProgressBar;
