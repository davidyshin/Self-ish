import React from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom'
import "../../user-newpost.css";


class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "",
      caption: "",
      user_id: "",
      date: "",
      message: ""
    };
  }
  componentDidMount() {
    const id = this.props.user.id;
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let date = mm + "/" + dd + "/" + yyyy;
    this.setState({ date, user_id: id });
  }

  handleUrl = e => {
    this.setState({
      url: e.target.value
    });
  };
  handleCaption = e => {
    this.setState({
      caption: e.target.value
    });
  };
  handleNewPost = e => {
   
    const { url, caption, user_id, date } = this.state;

    axios.post("/users/newPost", {
      url: url,
      caption: caption,
      user_id: user_id,
      date: date
    });
    this.setState({
      url: "",
      caption: "",
      date: "",
      message: 'Added Post!'
    });
  };

  render() {
    const { url, caption, date, message} = this.state;
    console.log("HELLO" ,date)
    return (
      <div className="newpost-container">
        <h1> New Post </h1>
        <input type='text' value={url} onChange={this.handleUrl} class="input-box" placeholder="Url image" />
        <br/>
         <input type="text" value={caption} onChange={this.handleCaption} class="input-box" placeholder="Write a caption..." />
         <br/>
        <button id="add-post" onClick={this.handleNewPost}> Add image </button>
        <button id="cancel-post" onClick={this.props.toggleModal}> Cancel </button>
        <p id="message"> {message} </p>
      </div>
    );
  }
}

export default NewPost;
