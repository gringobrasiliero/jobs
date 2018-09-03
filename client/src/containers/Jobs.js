import React, { Component } from 'react';
import {fetchJobs} from '../actions/job-actions'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';

class Jobs extends Component {

componentDidMount() {
  this.props.fetchJobs();

}


  render() {
    const {match} = this.props;
    return (
      <React.Fragment>

      <h1>Hi</h1>


      </React.Fragment>

    )
  }
}


const mapStateToProps = state => ({
  jobs: state.jobs
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: bindActionCreators(fetchJobs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
