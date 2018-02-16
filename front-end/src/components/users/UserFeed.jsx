import React from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import "../../user-feed.css";

class UserFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
      likes: [],
      allUsers: []
    };
  }

  componentDidMount() {
    axios
      .get("/users/getUserFeed")
      .then(res => {
        let posts = res.data.feed.filter((obj, index, arr) => {
          return arr.map(mapObj => mapObj.id).indexOf(obj.id) === index;
        });
        this.setState({
          posts
        });
      })
      .catch(err => {
        console.log(`feed err`, err);
      });
  }

  render() {
    const { users, posts, likes, allUsers } = this.state;
    const { user } = this.props;
    return (
      <div className="feed-posts">
        {posts.map(post => (
          <div className="post">
            <div className="post-top">
              <img
                src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
                alt="USERPROFILEPICTURE"
              />{" "}
              <p className="p-bold">{post.username}</p>
            </div>
            <img src={post.post_image} alt={post.id} width="400" height="400" />
            <div className="likes-comments">
              <i class="far fa-heart" />
              <i class="far fa-comment" />
            </div>
            <div className="post-bottom">
              <p className="p-bold">{post.username}</p>
              <p>{post.dates}</p>
              <p className="p-caption">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default UserFeed;
