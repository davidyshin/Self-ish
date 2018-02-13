import React from 'react'
import axios from 'axios'


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
                    message: 'Username / Password Incorret'
                })
            })

    }




    render() {
        const { username, password, message } = this.state
        return (
            <div className="login-container">
                <h1>LOG IN BRO</h1>
                Username:
                <input name="username" type="text" value={username} onChange={this.handleInput} />
                {" "}
                Password:
                <input name="password" type="password" value={password} onChange={this.handleInput} />
                <button onClick={this.handleSubmit}>Submit</button>
                <br />
                {message}
            </div>
        )
    }
}

export default LoginUser