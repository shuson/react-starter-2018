import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './index.scss'

class Wait4Me extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={style.spinner}>
        <div className={style.rect1}></div>
        <div className={style.rect2}></div>
        <div className={style.rect3}></div>
        <div className={style.rect4}></div>
        <div className={style.rect5}></div>
      </div>
    );
  }
}

Wait4Me.propTypes = {

};

export default Wait4Me;
