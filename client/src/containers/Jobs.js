import React, { Component } from 'react';
import {fetchJobs} from '../actions/job-actions'
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

componentDidMount() {
  this.props.fetchJobs();

}


  render() {
    const {match} = this.props;
    return (
      <React.Fragment>
        <Switch>
        <Route exact path={`${match.url}/:jobId`} component={JobsShow} />
        <Route exact path={`${match.url}`} component={JobsIndex} />
        </Switch>
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
