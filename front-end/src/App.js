import React, { Component } from 'react';
import './App.css';
import Users from './components/users/Users'
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Users} />
      </div>
    );
  }
}

export default App;
