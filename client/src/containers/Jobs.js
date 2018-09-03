import React, { Component } from 'react';
import {fetchJobs} from '../actions/job-actions'
import {fetchJobApplications} from '../actions/jobApplication-actions'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import JobsList from '../components/jobs/JobsList'
import { Route, Switch } from 'react-router-dom';
import JobsShow from './JobsShow'
import JobsIndex from './JobsIndex'

class Jobs extends Component {
  constructor(props) {
      super(props)

    }

handleClick = (e) => {
  alert("hi")
  this.props.fetchJobApplications(`/jobs/${e.target.id}/job_applications`)
}


componentDidMount() {
  this.props.fetchJobs();

}


  render() {
    const {match} = this.props;
    return (
      <React.Fragment>
        <Switch>
        <Route exact path={`${match.url}/:jobId`} component={JobsShow} />
        <Route exact path={`${match.url}`} render={(jobId) => {
          return(
          <JobsIndex handleClick={this.handleClick} />
        )
        }
        }
         />

        </Switch>
      </React.Fragment>

    )
  }
}


const mapStateToProps = state => ({
  jobs: state.jobs,
  jobApplications: state.jobApplications

})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: bindActionCreators(fetchJobs, dispatch),
    fetchJobApplications: bindActionCreators(fetchJobApplications, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
