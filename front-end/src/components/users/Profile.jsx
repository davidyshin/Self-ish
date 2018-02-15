import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../../user-profile.css";

const posts = [
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image:
      "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  }
];
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { user } = this.props;
    console.log("profile consolelog", user);
    return (
      <div className="profile-container">
        <div className="user-bar">
          <div className="pro-pic">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="USERPROFILEPIC"
            />
          </div>
          <div className="user-info">
            <div className="row-one">
              <h1>{user.username}</h1>
              <button className="edit-profile">
                <Link to="/profile/edit">Edit Profile</Link>
              </button>
            </div>
            <div className="row-two">
              <ul className="stats">
                <li>
                  <span className="count">60</span> posts
                </li>
                <li>
                  <span className="count">533</span> followers
                </li>
                <li>
                  <span className="count">490</span> following
                </li>
              </ul>
            </div>
            <div className="row-three"> {user.full_name} </div>
          </div>
        </div>
        <div className="user-posts">
          {posts.map((post) => {
            return (
            <div className="post-image">
              <img src={post.post_image} alt="post-image" />
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
