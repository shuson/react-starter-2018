import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Section1 extends React.Component {
  state = {

  }

  static propTypes = {
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const {dispatch} = this.props

    dispatch(() => {})
  }

  render() {

    return <div>
      I am section 1
    </div>
  }

}

function mapStateToProps(state, ownProps = {}) {
  return {
  }
};

function mapDispatchToProps(dispatch, ownProps = {}) {
  return {
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Section1);
