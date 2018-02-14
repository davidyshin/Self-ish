import React from "react";
import axios from "axios";
import LoginUser from "./LoginUser";
import NewUser from "./NewUser";
import { Route, Link, Switch } from "react-router-dom";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
        renderedPage: "register"
    }
  }
  renderLogin = () => {
    return <LoginPage active={this.props.active} user={this.props.user} />;
  };
  renderRegister = () => {
    return <NewUser active={this.props.active} user={this.props.user} />;
  };
  render() {
      let 
    return (
        {renderedPage: "register" ? this.renderRegister : this.Login}
    )
  }
}

export default LoginPage;
