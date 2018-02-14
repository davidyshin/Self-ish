import React from "react";
import Modal from "react-modal";
import NewPost from "./NewPost"
import UserFeed from "./UserFeed"
import { Redirect } from 'react-router'
import { Link, Switch, Route } from 'react-router-dom'
import "../../user-home.css";



class UserHome extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
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
      <div className="user-home">
      <div className="header-bar">
        <div className="left-top">
          <Link to ="/"><i class="fas fa-camera-retro"></i>{"    "}Self-ish</Link>
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
      <UserFeed/>
      </div>
    );
  }
}
export default UserHome;
