import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom'

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
        <div className="newpost-container">
            <h1> New Post </h1>
            <button onClick={this.props.toggleModal}>Cancel</button>
      </div>
    );
  }
}

export default NewPost;
