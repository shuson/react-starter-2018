import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './index.scss'

const Topbar = (props) => { // eslint-disable-line react/prefer-stateless-function
  const {appName, navigateTo } = props

  return (
    <div className={classnames(style.wrapper)}>
    <div className={classnames('col-md-1')}>
      
    </div>
    <div className={classnames('col-md-3')}>
    </div>
    <div className={classnames('col-md-3')}>

    </div>
    <div className={classnames('col-md-4')}>
      
    </div>
    <div className={classnames('col-md-1')}>
      {appName}
    </div>
  </div>
  );
}

Topbar.propTypes = {
  appName: PropTypes.string,
  navigateTo: PropTypes.func
};

export default Topbar;
