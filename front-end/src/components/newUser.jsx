import React from 'react'
import axios from 'axios'


class NewUser extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            fullName: '',
            username: '',
            password: '',
            message: '',
        }
    }


    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { username, password, email, fullName } = this.state
        if (username.length <= 6) {
            this.setState({
                message: 'Username must be at least 7 characters'
            })
        } else {
            axios
                .post('/users/new', {
                    email: email,
                    fullName: fullName,
                    username: username,
                    password: password
                })
                .then((res) => {
                    console.log(res)
                    this.setState({
                        username: '',
                        password: '',
                        message: 'REGISTRATION SUCCESS!'
                    })
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({
                        username: '',
                        password: '',
                        message: 'USERNAME ALREADY EXISTS'
                    })
                })
        }

    }




    render() {
        const { email, fullName, username, password, message } = this.state
        return (
            <div>
                <h1>Hello new user! Please, register below.</h1>
                <input className="inputBox" name="email" type="email" value={email} onChange={this.handleInput} placeholder='Email' maxLength='30' />
                <br />
                <input className="inputBox" name="fullName" type="text" value={fullName} onChange={this.handleInput} placeholder='Full Name' maxLength='30' />
                <br />
                <input className="inputBox" name="username" type="text" value={username} onChange={this.handleInput} placeholder='Username' maxLength='30' />

                <br />
                <input className="inputBox" name="password" type="password" value={password} onChange={this.handleInput} placeholder='Password' maxLength='30' />
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
                <br />
                {message}
            </div>
        )
    }
}


export default NewUser