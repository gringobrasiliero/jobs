import React, { Component } from 'react';
import {fetchJobApplications} from '../actions/jobApplication-actions'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';

class JobApplications extends Component {

componentDidMount() {
  this.props.fetchJobApplications();

}


  render() {
    return (
      <React.Fragment>

      <h1>Hi</h1>


      </React.Fragment>

    )
  }
}


const mapStateToProps = state => ({
  jobApplications: state.jobApplications
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobApplications: bindActionCreators(fetchJobApplications, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobApplications);
