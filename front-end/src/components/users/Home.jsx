import React from "react";
import Modal from "react-modal";
import NewPost from "./NewPost"
import UserFeed from "./UserFeed"
import axios from "axios"
import { Link, Switch, Route } from 'react-router-dom'
import "../../user-home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }
  toggleModal = () => {
    let { modalIsOpen } = this.state;
    this.setState({
      modalIsOpen: !modalIsOpen
    });
  };



  // renderHome = () => {

  //     const { active, user } = this.state
  //     if (active === false) {
  //         return (
  //             <NewUser />
  //         )
  //     } else {
  //         return (
  //             <UserHome user={user.username} logout={this.logOut} />
  //         )
  //     }

  // }
  // renderLogin = () => {
  //     const { active, user } = this.state
  //     if (active === false) {
  //         return (
  //             <LoginUser active={this.isActive} user={this.UserFound} />
  //         )
  //     } else {
  //         return (
  //             <UserHome user={user.username} logout={this.logOut} />
  //         )
  //     }
  // }

  render() {
    const {modalIsOpen} = this.state
    const {logOut} = this.props
    console.log(`user`, this.state);
    return (
      <div className="user-home">
        <div className="header-bar">
          <div className="left-top">
            <Link to="/">
              <i class="fas fa-camera-retro" />
              {"    "}Self-ish
            </Link>
          </div>
          <div className="search-box">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="right-top">
            <div className="user-buttons">
              <Modal isOpen={modalIsOpen} contentLabel="New Post">
                <NewPost toggleModal={this.toggleModal} />
              </Modal>

              <button>
                <Link to="/profile">
                  <i class="far fa-user fa-2x" />
                </Link>
              </button>

              <button onClick={this.toggleModal} className="newPost">
                <i class="fa fa-plus-square fa-2x" />
              </button>

              <button onClick={logOut}>
                <i class="fas fa-sign-out-alt fa-2x" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
