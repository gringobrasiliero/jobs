export const FETCH_JOB_APPLICATIONS = 'FETCH_JOB_APPLICATIONS'

export const fetchJobApplications = () => {
  return(dispatch) => {
    fetch('/job_applications')
    .then(res => res.json())
    .then(jobApplications=> {
      dispatch({
        type: FETCH_JOB_APPLICATIONS,
        payload: jobApplications
      })
    })
  }
}
