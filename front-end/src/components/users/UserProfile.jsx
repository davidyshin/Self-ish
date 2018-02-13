import React from "react";
import Modal from "react-modal";
import NewPost from "./NewPost"
import { Redirect } from 'react-router'
import { Link, Switch, Route } from 'react-router-dom'



class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      feed: false
    }
  }
  toggleModal = () => {
    let { modalIsOpen } = this.state
    this.setState({
      modalIsOpen: !modalIsOpen
    })
  }





  render() {
    let { user, logout } = this.props
    let { modalIsOpen } = this.state


    return (
      <div>
        <header>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </header>
        <div className="header-bar">
          <h1 className="header-title">Self-ish</h1>
        </div>
        <h2>{user}'s Feed!</h2>
        <button><Link to='/feed' >My Feed</Link></button>
        <button>Edit Profile</button>
        <Modal isOpen={modalIsOpen} contentLabel="New Post">
          <NewPost toggleModal={this.toggleModal} />
        </Modal>
        <button onClick={this.toggleModal} className="newPost">
          <i class="fa fa-plus-square" />
        </button>

        <button onClick={logout}>LOGOUT :(</button>
        <br />
      </div>
    );
  }
}

export default UserProfile;
