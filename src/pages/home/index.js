import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './index.scss'

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }
  
  render() {
    
    return (
      <div className={style.wrapper}>
        <div>I am home</div>
        <br/>

        <ul>
          <li><Link to={"/route1/"}>Go to RouteOne </Link></li>
          <li><Link to={"/route2/"}>Go to RouteTwo </Link></li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps = {}) {
  return {
    location: state.router.location
  }
};

function mapDispatchToProps(dispatch, ownProps = {}) {
  return {
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
