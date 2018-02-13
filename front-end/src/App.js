import React, { Component } from 'react';
import './App.css';
import Users from './components/users/Users'
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/users/new">Sign Up</Link>
          {" "}
          <Link to="/">Log In</Link>
        </nav>
        <h1 className="header-title">Self-ish</h1>
        <Route path='/' component={Users} />
      </div>
    );
  }
}

export default App;
