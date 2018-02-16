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
        <h1> Add an image link below  </h1>
        <input type='text' placeholder="url" value={url} onChange={this.handleInput}/>
         <input type="text" placeholder="Caption" value={caption} onChange={this.handleCaption} />
        <button id="add-image" onClick={this.handleNewPost}>Add image</button>
        < br />

        <button onClick={this.props.toggleModal}>Cancel</button>
      </div>
    );
  }
}

export default NewPost;
