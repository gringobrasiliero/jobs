import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './reducers';
import logger from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const allStoreEnhancers = compose(applyMiddleware(logger, thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer,
  {
    jobs: [],
    jobApplications: [],

  }, allStoreEnhancers
 );


   render(
     <Provider store={store}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </Provider>,
     document.getElementById('root')
   )
