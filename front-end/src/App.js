import React, { Component } from 'react';
import './App.css';
import Users from './components/users/Users';
import NewUser from './components/users/NewUser';
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header-title">Self-ish</h1>
        <Route path='/' component={Users} />
      </div>
    );
  }
}

export default App;
