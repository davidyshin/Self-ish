import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom'

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      url: ''
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
      .post('/users/addPost', {
        post: url,
        username: url,
      })
  }





  render() {
    const { url } = this.state
    return (
      <div className="newpost-container">
        <h1> Add an image link below  </h1>
        <input type='text' value={url} onChange={this.handleInput}/>
        <button onClick={this.handleNewPost}>Add image</button>
        < br />
        <button onClick={this.props.toggleModal}>Cancel</button>
      </div>
    );
  }
}

export default NewPost;
