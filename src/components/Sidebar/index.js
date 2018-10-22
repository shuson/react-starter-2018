import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import BarItem from './BarItem'
import toLower from 'lodash/toLower'

import logo from '../../assets/logo.png'
import style from './index.scss'

const Sidebar = props => {
  let {appName, menuCollaps, selectedItem, toggleMenu, changeActiveItem, navigateTo} = props

  let siderItems = null
 
  siderItems = <ul className={style.accordionList}>
   
  </ul>

  return (
    <div className={classNames(style.wrapper, menuCollaps? style.wrapperCollaps: "", 'clearfix')}>
      <div className={style.sidebarHeader}>
        <img src={logo} alt="tookitaki" title="logo" />
        <h5>ALPHA</h5>
      </div>
      <a href="javascript:void(0)" className={style.menuToggle} onClick={() => toggleMenu()}>
        <i className={classNames('fa', menuCollaps? 'fa-chevron-right' : 'fa-chevron-left')} 
        aria-hidden="true"></i>
      </a>
      <nav id={style.sidebar}>
        {siderItems}
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  appName: PropTypes.string,
  toggleMenu: PropTypes.func,
  changeActiveItem: PropTypes.func,
  menuCollaps: PropTypes.bool,
  selectedItem: PropTypes.number,
  navigateTo: PropTypes.func,
};

export default Sidebar;
