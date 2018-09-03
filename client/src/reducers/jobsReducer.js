import initialState from './initialState';
import {FETCH_JOBS} from '../actions/job-actions'

export default (state = initialState.jobs, action) => {
  switch(action.type) {

    case FETCH_JOBS:
      return [...state, ...action.payload]

    default:
      return state
    }
}
