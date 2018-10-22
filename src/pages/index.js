import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {push } from "connected-react-router"
import RedBox from 'redbox-react'
import Topbar from "../components/Topbar"
import Sidebar from '../components/Sidebar'

import {appRoutes } from '../routes'

import style from './index.scss'

@withRouter
class App extends React.Component {

  state = {
    appError: null,
    selectedItem: 1,
    menuCollaps: true,
  }

  static propTypes = {
  }

  onPageError = () => {
    window.location.reload()
  }

  toggleMenu = () => {
    this.setState({
      menuCollaps: !this.state.menuCollaps
    })
  }

  changeActiveItem = (id) => {
    this.setState({
      ...this.state,
      selectedItem: id
    })
  }

  componentDidCatch(error, info) {
    this.setState({
      ...this.state,
      appError: error
    })
  }

  componentDidMount() {
    const { history } = this.props
  }

  render() {
    const {appError, selectedItem, menuCollaps } = this.state
    const {navigateTo } = this.props

    if(appError && process.env.mode == "dev") {
      return <RedBox error={appError} />
    } else if (appError && process.env.mode == "prod") {
      return <div>
        <h3 className={style.errorMessage}>Oops! Something went wrong!</h3>
        <button onClick={this.onPageError}>Back</button>
      </div>
    }

    return <div className={style.wrapper}>
      <Sidebar appName={"React"} selectedItem={selectedItem}
        menuCollaps={menuCollaps}
        changeActiveItem={this.changeActiveItem}
        toggleMenu={this.toggleMenu}
        navigateTo={navigateTo}
      />
      <div className={style.content}>
        <Topbar appName={"React"} 
          navigateTo={navigateTo}
        />
        <div className={style.routedContent}>
          {appRoutes()}
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state, ownProps = {}) {
  return {
    location: state.router.location
  }
};

function mapDispatchToProps(dispatch, ownProps = {}) {
  return {
    dispatch,
    navigateTo: location => {
      dispatch(push(location))
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);