import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import NewUser from './NewUser'
import LoginUser from './LoginUser'
import UserProfile from './UserProfile'
import Feed from './feed'
import axios from 'axios'



class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            active: false,
        }
        this.allUsers = []
    }


    componentDidMount() {
        const { user } = this.state
        axios
            .get('/users/getUser')
            .then((res) => {
                this.setState({
                    user: res.data.user,
                    active: true
                })
            })
            .catch((err) => {
                console.log(`errrr`, err)
            })
    }



    UserFound = (user) => {
        this.setState({
            user: user
        })
    }

    isActive = () => {
        this.setState({
            active: !this.state.active
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


    renderProfile = () => {
       
        const { active, user } = this.state
        if (active === false) {
            return (
                <LoginUser active={this.isActive} user={this.UserFound} />
            )
        } else {
            return (
                <UserProfile user={user.username} logout={this.logOut} />
            )
        }

    }

    renderFeed = () => {
        const { active, user } = this.state 
        if(active === false || !user) {
            return (
            <LoginUser active={this.isActive} user={this.UserFound} />
            )
        } else {
            return (
                <Feed />
            )
        }
    }





    render() {
        console.log(`user`, this.state)
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={NewUser} />
                    <Route exact path='/feed' render={this.renderFeed} />
                    <Route exact path='/profile' component={this.renderProfile} />
                </Switch>
            </div>
        )
    }
}


export default Users