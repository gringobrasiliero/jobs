import React from 'react';
import { connect } from 'react-redux';
import JobApplicationsList from '../components/jobApplications/JobApplicationsList'

const JobsShow = (props => {
  return(
    <JobApplicationsList jobs={props.jobs} />
  )
})

const mapStateToProps = (state, ownProps) => {
  const jobs = state.jobs
  return{jobs}
}

export default connect(mapStateToProps)(JobsShow)
