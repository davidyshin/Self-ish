
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import NewUser from './NewUser'
import EditProfile from "./EditProfile";
import LoginUser from './LoginUser'
import UserHome from './UserHome'
import Feed from './Feed'
import axios from 'axios'


class Users extends React.Component {
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
            active: !this.state.active
            })
    })
  }

    logOut = () => {
        axios
            .get('/users/logout')
            .then((res) => {
                this.setState({
                    active: false
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    renderHome = () => {
       
        const { active, user } = this.state
        if (active === false) {
            return (
                <LoginUser active={this.isActive} user={this.UserFound} />
            )
        } else {
            return (
                <UserHome user={user.username} logout={this.logOut} />
            )
        }

    }
    renderNewUser = () => {
        const { active, user } = this.state
        if (active === false) {
            return (
                <NewUser />
            )
        } else {
            return (
                <UserHome user={user.username} logout={this.logOut} />
            )
        }
    }


    render() {
        console.log(`user`, this.state)
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={this.renderHome} />
                    <Route exact path='/register' component={this.renderNewUser} />
                    {/* <Route exact path='/profile' component={this.renderProfile} /> */}
                  {/* <Route exact path="/profile/editprofile" component={this.renderEditProfile} /> */}
                </Switch>
            </div>
        )

    }
  }

 

export default Users;
