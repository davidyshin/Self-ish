import React from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

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
    axios
      .get("/users/getAllinfo")
      .then(res => {
        this.setState({
          allUsers: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { users, post, likes, allUsers } = this.state;
    const { user } = this.props;
    console.log(`yerrr`, allUsers);
    return (
      <div className="feedPost">
        {posts.map(post => (
          <div>
          <img src="USERPROFILEPICTURE" alt="USERPROFILEPICTURE"/> <h1>{user.username}'s Feed</h1>
<h1>{post.user_id}</h1>
            <img src={post.post_image} alt={post.id} />
            <h3>{post.dates}</h3>
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserFeed;
