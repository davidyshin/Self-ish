import React from 'react'
import Modal from 'react-modal';
import { Route, Link, Switch } from 'react-router-dom'




const UserProfile = ({ user, logout }) => {
    console.log(user)
    return (
        <div>
            <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </header>
            <h1>{user}!</h1>
            <button>View Feed</button>
            <Link to="/users/editprofile"><button>Edit Profile</button></Link>
            <button className="addPost"><i class="fa fa-plus-square" ></i></button>
            <button onClick={logout}>LOGOUT :(</button>
            <br />
        </div>
    )

}


export default UserProfile