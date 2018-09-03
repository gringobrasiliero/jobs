import React from 'react';
import { connect } from 'react-redux';
import JobsList from '../components/jobs/JobsList'

const JobsShow = (props) => {
  return(
    <JobsList jobs={props.jobs} />
  )
}

const mapStateToProps = (state,ownProps) => {
  const jobs = state.jobs
  return{jobs}
}

export default connect(mapStateToProps)(JobsShow)
