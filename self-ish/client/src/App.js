import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users'
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/users/new">Sign Up</Link>
          {" "}
          <Link to="/users">Log In</Link>
        </nav>
        <h1>Self-ish</h1>
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
