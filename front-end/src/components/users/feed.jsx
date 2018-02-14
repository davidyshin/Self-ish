import React from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'

class Feed extends React.Component {
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
        console.log(`yerrr`, allUsers)
        return (
            <div>
                {allUsers.map(user =>
                    <div>
                        <h1>{user.username}</h1>
                        <img src={user.post} alt={user.username} />
                        <p>{user.likes}</p>
                    </div>
                )}
                <button><Link to='/profile'>MY profile</Link></button>
            </div>
        )
    }


}


export default Feed