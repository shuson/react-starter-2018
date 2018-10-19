import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import style from './index.scss'

@withRouter 
class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }

  state = {
    appError: null
  }

  onPageError = () => {
    window.location.reload()
  }

  componentDidCatch(error, info) {
    this.setState({
      ...this.state,
      appError: error
    })
  }
  
  render() {
    const {appError } = this.state

    if(appError && process.env.mode == "dev") {
      return <RedBox error={appError} />
    } else if (appError && process.env.mode == "prod") {
      return <div>
        <h3 className={style.errorMessage}>Oops! Something went wrong!</h3>
        <button onClick={this.onPageError}>Back</button>
      </div>
    }

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
    
  }
};

function mapDispatchToProps(dispatch, ownProps = {}) {
  return {
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
