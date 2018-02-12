import React from 'react'



const UserProfile = ({ user, logout }) => {
    console.log(user)
    return (
        <div>
            <h1>Welcome back, {user}! < br /> I missed you ;)</h1>
            <img src="https://static1.squarespace.com/static/528cfee3e4b0c3afb632d2fc/t/58e68d14a5790ac8a6e76704/1518044166138/" width="150" height="150" />
            <h6>Hey Lev, Hey Reed, Hey Matt</h6>
            <button onClick={logout}>LOGOUT :(</button>
        </div>
    )

}


export default UserProfile