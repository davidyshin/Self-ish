import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom'
import "../../register-page.css";

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullName: "",
      username: "",
      password: "",
      message: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { username, password, email, fullName } = this.state;
    if (username.length <= 6) {
      this.setState({
        message: "Username must be at least 7 characters"
      });
    } else {
      axios
        .post("/users/new", {
          email: email,
          fullName: fullName,
          username: username,
          password: password
        })
        .then(res => {
          console.log(res);
          this.setState({
            username: "",
            password: "",
            message: "REGISTRATION SUCCESS!"
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            username: "",
            password: "",
            message: "USERNAME ALREADY EXISTS"
          });
        });
    }
  };

  render() {
    const { email, fullName, username, password, message } = this.state;
    return (
        <div className="signup-container">
      <div id="register-box">
        <h1 id="app-name" > Self-ish </h1>
        <h4>Sign Up to share photos and videos of yourself-ish with your friends.</h4>
        <button type="button" class="button"> Log in with Facebook</button>
        <p> -------------- OR -------------- </p>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-box"
            name="email"
            type="email"
            value={email}
            onChange={this.handleInput}
            placeholder="Email"
            maxLength="30"
          />
          <br />
          <input
            className="input-box"
            name="fullName"
            type="text"
            value={fullName}
            onChange={this.handleInput}
            placeholder="Full Name"
            maxLength="30"
          />
          <br />
          <input
            className="input-box"
            name="username"
            type="text"
            value={username}
            onChange={this.handleInput}
            placeholder="Username"
            maxLength="30"
          />

          <br />
          <input
            className="input-box"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInput}
            placeholder="Password"
            maxLength="30"
          />
          <br />
          <input type="submit" value="Submit"/>
        </form>
        <p id="signup-agreement"> By signing up, you agree to our Terms &amp; Privacy Policy</p>
        <br />
        {message}
      </div>
      <div id="login-box">
          <p>Already a Self-ish member? <Link to="/users/login">Log in</Link></p>
          </div>
      </div>
    );
  }
}

export default NewUser;
