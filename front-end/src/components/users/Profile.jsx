import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { user } = this.props;
    console.log("profile consolelog", user)
    return (
      <div>
        <h1>{user.username}</h1>
      </div>
    );
  }
}

export default Profile;
