import initialState from './initialState'
import {FETCH_JOB_APPLICATIONS} from '../actions/jobApplication-actions'


export default (state = initialState.jobApplications, action) => {
  switch(action.type) {

    case FETCH_JOB_APPLICATIONS:
      return [...state, ...action.payload]

    default:
      return state
    }
}
