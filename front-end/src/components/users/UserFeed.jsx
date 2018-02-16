import React from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import "../../user-feed.css";



class UserFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      post: [],
      likes: [],
      allUsers: []
    };
  }



  componentDidMount() {
    
  }








  render() {
    const { users, post, likes, allUsers } = this.state;
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
              <p className="p-bold">{user.username}</p>
            </div>
            <img src={post.post_image} alt={post.id} />
            <div className="likes-comments">
              <i class="far fa-heart" />
              <i class="far fa-comment" />
            </div>
            <div className="post-bottom">
              <p className="p-bold">{user.username}</p>
              <p className="p-caption">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default UserFeed;




// const posts = [
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   },
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   },
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   },
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   },
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   },
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   },
//   {
//     id: 0,
//     post_image:
//       "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
//     caption: "hello there",
//     user_id: 7,
//     dates: "1/1/17"
//   }
// ];