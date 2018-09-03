import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Jobs from './containers/Jobs'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route path="/jobs" component={Jobs} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;
