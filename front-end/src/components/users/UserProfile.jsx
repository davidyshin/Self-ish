import React from 'react'
import Modal from 'react-modal';



const UserProfile = ({ user, logout }) => {
    console.log(user)
    return (
        <div>
            <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </header>
            <h1>{user}!</h1>
            <button>View Feed</button>
            <button>Edit Profile</button>
            <button className="addPost"><i class="fa fa-plus-square" ></i></button>
            <button onClick={logout}>LOGOUT :(</button>
            <br />
        </div>
    )

}


export default UserProfile