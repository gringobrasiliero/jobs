export const FETCH_JOBS = 'FETCH_JOBS';

export const fetchJobs = () => {
  return(dispatch) => {
    fetch('/jobs')
    .then(res => res.json())
    .then(jobs => {
      dispatch({
        type: FETCH_JOBS,
        payload: jobs
      })
    })
  }
}
