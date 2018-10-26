import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './index.scss'

const Footbar = (props) => {
  return (
    <div className={classnames(style.wrapper)}>
      <footer>Built With &#9829; by Tookitaki Holding Pte Ltd.</footer>
    </div>
  );
}

Footbar.propTypes = {

};

export default Footbar;
