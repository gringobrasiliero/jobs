import React, { Component } from 'react';
import {fetchJobs} from '../actions/job-actions'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import JobsList from '../components/jobs/JobsList'


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

      <JobsList jobs={this.props.jobs} />

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
