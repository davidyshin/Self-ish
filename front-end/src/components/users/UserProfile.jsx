import React from 'react'



const UserProfile = ({ user, logout }) => {
    return (
        <div>
            <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </header>
                <div className="header-bar">
        <h1 className="header-title">Self-ish</h1>
                </div>
            <h2>{user}'s Feed!</h2>
            <button>View Feed</button>
            <button>Edit Profile</button>
            <button className="addPost"><i class="fa fa-plus-square" ></i></button>
            <button onClick={logout}>LOGOUT :(</button>
            <br />
        </div>
    )

}


export default UserProfile