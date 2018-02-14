import React from "react";
const posts = [
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
    caption: "hello there",
    user_id: 7,
    dates: "1/1/17"
  },
  {
    id: 0,
    post_image: "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067",
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
          <img src="USERPROFILEPIC" alt="USERPROFILEPIC" />
          <h1>{user.username}</h1>
          <p>60 posts</p>
          <p>533 followers</p>
          <p>490 following</p>
          <p> {user.full_name} </p>
          <p> Blurb </p>
        </div>
        <div className="user-posts">
          {posts.map(post=> {
            return (<img src={post.post_image} alt="post-image"/>)
          })}
          </div>
      </div>
    );
  }
}

export default Profile;
