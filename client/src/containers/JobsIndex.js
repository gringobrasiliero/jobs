import React from 'react';
import { connect } from 'react-redux';
import JobsList from '../components/jobs/JobsList'

const JobsIndex = (props) => {
  return(
    <JobsList jobs={props.jobs} handleClick={props.handleClick} />
  )
}

const mapStateToProps = (state,ownProps) => {
  const jobs = state.jobs
  return{jobs}
}

export default connect(mapStateToProps)(JobsIndex)
