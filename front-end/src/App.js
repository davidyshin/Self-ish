import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/users/Home";
import LoginPage from "./components/login-page/LoginPage";
import NewUser from "./components/login-page/NewUser";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      active: false
    };
    this.allUsers = [];
  }

  componentDidMount() {
    const { user } = this.state;
    axios
      .get("/users/getUser")
      .then(res => {
        this.setState({
          user: res.data.user,
          active: true
        });
      })
      .catch(err => {
        console.log(`errrr`, err);
      });
  }

  UserFound = user => {
    this.setState({
      user: user
    });
  };

  isActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  logOut = () => {
    axios
      .get("/users/logout")
      .then(res => {
        this.setState({
          active: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderHome = () => {
    const { active, user } = this.state;
    if (active === false) {
      return <LoginPage active={this.isActive} user={this.UserFound} />;
    } else {
      return <Home user={user} logOut={this.logOut} />;
    }
  };

  render() {
    const { active } = this.state;
    return (
      <div>
          <Route path="/" component={this.renderHome} />
      </div>
    );
  }
}

export default App;
