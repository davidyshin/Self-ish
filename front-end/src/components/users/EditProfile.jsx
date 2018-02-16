import React, { Component } from "react";
//import NewUser from './NewUser'
//import LoginUser from './LoginUser'
//import UserProfile from './UserProfile'
import "../../user-profile.css";
import axios from "axios";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "../../user-editprofile.css";

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullName: "",
      password: "",
      message: "",
      profile_pic: ""
    };
  }
  componentDidMount() {
      const {user} = this.props
      this.setState({
          email: user.email,
          fullName: user.full_name,
          profile_pic: user.profile_pic
      })
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { password, email, fullName, profile_pic } = this.state;
    const id = this.props.user.id;
    if (password.length <= 6 && password.length > 0) {
      this.setState({
        message: "Password must be at least 7 characters"
      });
    } else {
      // THIS NEEDS FIXING
      axios
        .post('/users/edit', {
          email: email,
          fullName: fullName,
          password: password,
          profile_pic: profile_pic,
          id: id
        })
        .then(res => {
          console.log(res);
          this.setState({
            message: "PROFILE CHANGE SUCCESSFUL!"
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            password: "",
            message: "Error"
          });
        });
    }
  };

  render() {
    const { email, fullName, password, profile_pic, message } = this.state;
    console.log(this.state)
    return (
      <div className="signup-container">
        <div id="register-box">
          <h1> Edit Profile: </h1>
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
              name="password"
              type="password"
              value={password}
              onChange={this.handleInput}
              placeholder="Password"
              maxLength="30"
            />
            <br />
            <input
              className="input-box"
              name="profile_pic"
              type="text"
              value={profile_pic}
              onChange={this.handleInput}
              placeholder="Profile Picture"
              maxLength="30"
            />
            <br />
            <button onClick={this.handleSubmit} id="edit-profile-btn">Edit Profile</button>
          <br />
          {message}
        </div>
      </div>
    );
  }
}

export default EditProfile;
