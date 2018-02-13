import React from "react";
import Modal from "react-modal";
import { Route, Link, Switch } from "react-router-dom";
import NewPost from "./NewPost";
import "../../user-profile.css";

class UserProfile extends React.Component {
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

  render() {
    let { user, logout } = this.props;
    let { modalIsOpen } = this.state;
    return (
      <div className="header-bar">
        <div>
          <h1 className="header-title">Self-ish!</h1>

          <button>View Feed</button>
          <Modal isOpen={modalIsOpen} contentLabel="New Post">
            <NewPost toggleModal={this.toggleModal} />
          </Modal>
  
          <button><Link to="/users/editprofile">Edit Profile</Link></button>
            <button onClick={this.toggleModal} className="newPost">
              <i class="fa fa-plus-square" />
            </button>
            <button onClick={logout}>LOGOUT :(</button>
        </div>
      </div>
    );
  }
}
export default UserProfile;
