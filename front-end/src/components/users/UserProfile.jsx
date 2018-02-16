import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import "../../user-profile.css";

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      followers: "",
      followersCount: "",
      followingCount: "",
      following: "",
      posts: [],
      postCount: "",
      followerListIsOpen: false,
      followingListIsOpen: false,
      likes: "",
      active: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let fetchedStats = 
    axios.get(`/users/getFollowersCount/${id}`).then(res => {
      fetchedStats.followingCount = res.data.followerInfo.count;
    });
    axios.get(`/users/getFolloweesCount/${id}`).then(res => {
      fetchedStats.followersCount = res.data.data.count;
      this.setState({
        followersCount: fetchedStats.followersCount,
        followingCount: fetchedStats.followingCount
      });
    });
    axios.get(`/users/getFollowees/${id}`).then(res => {
      this.setState({
        followers: [...res.data.data]
      });
    });
    axios.get(`/users/getFollowers/${id}`).then(res => {
      this.setState({
        following: [...res.data.data]
      });
    });
    axios.get(`/users/getPostCount/${id}`).then(res => {
      this.setState({ postCount: res.data.postCount.count });
    });

    axios.get(`/users/getUserPost/${id}`).then(res => {
      this.setState({ posts: res.data.userPost });
    });
    axios.get(`/users/getSingleUser/${id}`).then(res=>{
        this.setState({user: res.data.user})
    })
  }

  toggleFollowerModal = () => {
    let { followerListIsOpen } = this.state;
    this.setState({
      followerListIsOpen: !followerListIsOpen
    });
  };
  toggleFollowingModal = () => {
    let { followingListIsOpen } = this.state;
    this.setState({
      followingListIsOpen: !followingListIsOpen
    });
  };
  Follower = () => {
    const { user } = this.props;
    const { followers } = this.state;
    return (
      <div>
        <h1>FOLLOWERS</h1>
        <ul>
          {followers.map(user => {
            return <li>{user.username}</li>;
          })}
        </ul>
        <button onClick={this.toggleFollowerModal}>cancel</button>
      </div>
    );
  };
  Following = () => {
    const { user } = this.props;
    const { following } = this.state;
    return (
      <div>
        <h1>FOLLOWING</h1>
        <ul>
          {following.map(user => {
            return <li>{user.username}</li>;
          })}
        </ul>
        <button onClick={this.toggleFollowingModal}>cancel</button>
      </div>
    );
  };

  render() {
    const {
      followersCount,
      followingCount,
      followerListIsOpen,
      followingListIsOpen,
      postCount,
      user,
      posts
    } = this.state;
    return (
      <div className="profile-container">
        <div className="user-bar">
          <div className="pro-pic">
            <img src={user.profile_pic} alt="USERPROFILEPIC" />
          </div>
          <div className="user-info">
            <div className="row-one">
              <h1>{user.username}</h1>
              <button className="edit-profile">
                Follow
              </button>
            </div>
            <div className="row-two">
              <ul className="stats">
                <li>
                  <span className="count">{postCount}</span> posts
                </li>
                <li className="follows-list" onClick={this.toggleFollowerModal}>
                  <span className="count">{followersCount}</span> followers
                </li>
                <li
                  className="follows-list"
                  onClick={this.toggleFollowingModal}
                >
                  <span className="count">{followingCount}</span> following
                </li>
              </ul>
            </div>
            <div className="row-three"> {user.full_name} </div>
          </div>
        </div>
        <div className="user-posts">
          {posts.map(post => {
            return (
              <div className="post-image">
                <img src={post.post_image} alt="post-image" />
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={this.state.followerListIsOpen}
          contentLabel="Follower List"
          className="follows-modal"
        >
          <this.Follower user={user} toggleModal={this.toggleFollowerModal} />
        </Modal>
        <Modal
          isOpen={this.state.followingListIsOpen}
          contentLabel="Following List"
          className="follows-modal"
        >
          <this.Following user={user} toggleModal={this.toggleFollowingModal} />
        </Modal>
      </div>
    );
  }
}

export default UserProfile;
