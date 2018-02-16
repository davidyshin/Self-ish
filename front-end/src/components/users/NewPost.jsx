import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom'

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      message: ''
    };
  }


  handleInput = (e) => {
    this.setState({
      url: e.target.value
    })
  }


  handleNewPost = (e) => {
    const { url } = this.state
    axios 
      .post('/users/newPost', {
        post: url,
        dates: Date().slice(0,15)
      })
      .then((res) => {
        this.setState({
          url: '',
          message: 'Added Post!'
        })
      })
      .catch((err) => {
        console.log(`newPost err`, err)
      })
  }




  render() {
    const { url, message } = this.state
    return (
      <div className="newpost-container">
        <h1> Add an image link below  </h1>
        <input type='text' value={url} onChange={this.handleInput}/>
        <button onClick={this.handleNewPost}>Add image</button>
        <br />
        {message}
        < br />
        <button onClick={this.props.toggleModal}>Cancel</button>
      </div>
    );
  }
}

export default NewPost;
