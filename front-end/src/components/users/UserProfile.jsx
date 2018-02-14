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
      <div className="header-bar">
        <div className="left-top">
          <h1 className="header-title">Self-ish</h1>
        </div>
        <div className="search-box">
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="right-top">
          <div className="user-buttons">
            <Modal isOpen={modalIsOpen} contentLabel="New Post">
              <NewPost toggleModal={this.toggleModal} />
            </Modal>

            <button>
              <Link to="/users/editprofile">
                <i class="far fa-user fa-2x" />
              </Link>
            </button>
            <button onClick={this.toggleModal} className="newPost">
              <i class="fa fa-plus-square fa-2x" />
            </button>
            <button onClick={logout}>
              <i class="fas fa-sign-out-alt fa-2x" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
