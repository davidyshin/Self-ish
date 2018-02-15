import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/users/Home";
import LoginUser from "./components/login-page/LoginUser";
import NewUser from "./components/login-page/NewUser";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import EditProfile from "./components/users/EditProfile";

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
        console.log("THIS IS A RESPONSE" , res)
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
      return <NewUser />;
    } else {
      return <Home user={user} logOut={this.logOut} />;
    }
  };

  renderNewUser = () => {
    const { active, user } = this.state;
    if (active === false) {
      return <NewUser />;
    } else {
      return <Redirect to="/" />;
    }
  };

  renderLogin = () => {
    const { active, user } = this.state;
    if (active === false) {
      return <LoginUser active={this.isActive} user={this.UserFound} />;
    } else {
      return <Redirect to="/" />;
    }
  };

  renderEditProfile = () => {
    const { active, user } = this.state;
    if (active === false) {
      return <LoginUser active={this.isActive} user={this.UserFound} />;
    } else {
      return <EditProfile/>;
    }
  };

  render() {
    const { active } = this.state;
    return (
      <div>
        <Switch>
          <Route path="/home" component={this.renderHome} />
          <Route path="/register" component={this.renderNewUser} />
          <Route path="/login" component={this.renderLogin} />
          <Route path="/login" component={this.renderLogin} />
          <Route path="/profile/edit" component={this.renderEditProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
