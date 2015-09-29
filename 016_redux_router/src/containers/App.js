import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div>
          { children }
        </div>
      </div>
    );
  }
}

export default App;
