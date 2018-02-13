import React from 'react'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom';
import "../../login-page.css";


class LoginUser extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }





    handleSubmit = (e) => {
        const { username, password } = this.state
        axios
            .post('/users/login', {
                username: username,
                password: password
            })
            .then((res)=> {
                console.log(res)
                this.props.user(res.data)
                this.props.active()
            })
            .catch((err)=>{
                console.log(err)
                this.setState({
                    username: '',
                    password: '',
                    message: 'Username / Password Incorrect'
                })
            })

    }




    render() {
        const { username, password, message } = this.state
        return (
            <div className="login-container">
                <div id="login-box">
                <h1 id="app-name" > Self-ish </h1>
                <input name="username" type="text" value={username} onChange={this.handleInput} 
                placeholder="Username"
                className="input-box"
                />
                <br/>
                <input name="password" type="password" value={password} onChange={this.handleInput} 
                placeholder="Password"
                className="input-box"
                />
                <br/>
                <button onClick={this.handleSubmit}>Log in</button>
                <br />
                {message}
                <p> <Link to="/"> Forgot Password?</Link></p>
                </div>

                <div id="signup-box">
                    <p> Not a Self-ish member? <Link to="/"> Sign Up</Link></p>
                 </div>
            </div>
        )
    }
}

export default LoginUser