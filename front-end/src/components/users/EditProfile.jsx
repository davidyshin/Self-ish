import React, { Component } from 'react';
//import NewUser from './NewUser'
//import LoginUser from './LoginUser'
//import UserProfile from './UserProfile'
import "../../user-profile.css";
import axios from 'axios';
import { Route, Link, Switch, Redirect } from "react-router-dom";


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


        handleInput = e => {
            this.setState({
              [e.target.name]: e.target.value
            });
          };
        
          handleSubmit = e => {
            const { password, email, fullName, profile_pic } = this.state;
            if (password.length <= 6) {
              this.setState({
                message: "Password must be at least 7 characters"
              });
            } else {
              axios
                .post("/users/new", {
                  email: email,
                  fullName: fullName,
                  password: password,
                  profile_pic: profile_pic
                })
                .then(res => {
                  console.log(res);
                  this.setState({
                    password: "",
                    message: "PROFILE CHANGE SUCCESSFUL!"
                  });
                })
                .catch(err => {
                  console.log(err);
                  this.setState({
                    password: "",
                    message: "USERNAME ALREADY EXISTS"
                  });
                });
            }
          };
        
          render() {
            const { email, fullName, password, profile_pic, message } = this.state;
            return (
                
                
                 





                
                
            <div className="signup-container">
              <div id="register-box">
                <h1>Update Profile Information:</h1>
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
                    placeholder="Profile Pic"
                    maxLength="30"
                  />
                  <br />

                  <Link to="/users/profile"><button>Edit Profile</button></Link>
                </form>
                <br />
                {message}
              </div>
           </div>
            );
          }
        }
        

export default EditProfile;