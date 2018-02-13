import React from 'react'
import Modal from 'react-modal';
import { Route, Link, Switch } from 'react-router-dom'
import NewPost from "./NewPost"
import "../../user-profile.css"


   
class UserProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false
        }
    }
    toggleModal = () => {
        let {modalIsOpen} = this.state
        this.setState({
            modalIsOpen: !modalIsOpen
        })
    }
  render() {
      let {user, logout} = this.props
      let {modalIsOpen} = this.state
    return (
      <div className="header-bar">
        <div >
          <h1 className="header-title">Self-ish</h1>
        
        <button>View Feed</button>
        <button>Edit Profile</button>
        <Modal isOpen={modalIsOpen} contentLabel="New Post">
          <NewPost toggleModal={this.toggleModal}/>
        </Modal>

        <button onClick={this.toggleModal} className="newPost">
          <i class="fa fa-plus-square" />
        </button>

const UserProfile = ({ user, logout }) => {
    console.log(user)
    return (
        <div>
            <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </header>
            <h1>{user}!</h1>
            <button>View Feed</button>
            <Link to="/users/editprofile"><button>Edit Profile</button></Link>
            <button className="addPost"><i class="fa fa-plus-square" ></i></button>
            <button onClick={logout}>LOGOUT :(</button>
            <br />
        </div>
      </div>
    );
  }
}

export default UserProfile;
