import React from 'react';
import { Link } from 'react-router-dom';

 const Header = () => {
    return(
      <div className="App">
          <header className="App-header">
            <h1 className="App-Title">Jobs</h1>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Jobs'}>Jobs</Link></li>
              <li><Link to={'/Applications'}>Applications</Link></li>
            </ul>
          </header>
      </div>
    )
}

export default Header
