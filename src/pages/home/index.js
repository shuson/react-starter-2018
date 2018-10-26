import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Section1 from './containers/section1'
import Section2 from './containers/section2'

import style from './index.scss'

class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  state = {

  }

  static PAGE_NAME = "HOME"

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    //if there are more than 1 dispatch, place them into separate sections
  }
  
  render() {
    
    return (
      <div className={style.wrapper}>
        <div>I am home</div>
        <Section1 />
        <Section2 />
        <br/>

        <ul>
          <li><Link to={"/route1/"}>Go to RouteOne </Link></li>
          <li><Link to={"/route2/"}>Go to RouteTwo </Link></li>
        </ul>
        
      </div>
    );
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
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
