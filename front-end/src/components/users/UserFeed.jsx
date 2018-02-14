import React from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'

class UserFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            post: [],
            likes: [],
            allUsers: [],
        }
    }



    
    componentDidMount() {
        axios
            .get('/users/getAllinfo')
            .then(res => {
                this.setState({
                    allUsers: res.data.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }




    render() {
        const { users, post, likes, allUsers } = this.state
        const {user} = this.props
        console.log(`yerrr`, allUsers)
        return (
            <div>
                <h1>{user.username}'s Feed</h1>
                {allUsers.map(user =>
                    <div>
                        <h1>{user.username}</h1>
                        <img src={user.post} alt={user.username} />
                        <p>{user.likes}</p>
                    </div>
                )}
            </div>
        )
    }
}


export default UserFeed