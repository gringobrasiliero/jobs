import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer'
import jobApplicationsReducer from './jobApplicationsReducer'

export default combineReducers({

  jobs: jobsReducer,
  jobApplications: jobApplicationsReducer
});
