const db = require("../db/index");

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function registerUser(req, res, next) {
  const hash = authHelpers.createHashPassword(req.body.password);
  db
    .none(
      "INSERT INTO users (email, full_name, username, password_digest, profile_pic) VALUES (${email}, ${fullName}, ${username}, ${password}, ${profile_pic})",
      {
        email: req.body.email,
        fullName: req.body.fullName,
        username: req.body.username,
        password: hash,
        profile_pic: req.body.profile_pic
      }
    )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      console.log(`this is your error`, err);
      res.status(500).json({
        message: `Registration Failed    `,
        err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

// post
function getUser(req, res, next) {
    db.one('SELECT * FROM users WHERE username=${username}', {username: req.user.username}).then(data => {
        res.status(200).json({user: data})
    })
}


function newPost(req, res, next) {
  db
    .none(
      "INSERT INTO posts(post_image, caption, user_id, dates) VALUES(${post}, ${caption}, ${user_id}, ${dates})",
      {
        post: req.body.post,
        caption: req.body.caption,
        user_id: req.user.id,
        dates: req.body.dates
      }
    )
    .then(() => {
      res.status(200).json({
        message: "successfully updated user post"
      });
    })
    .catch(err => {
      console.log(`this is your err`, err);
      res.status(500).json({
        message: "FAILED: couldnt update user post"
      });
    });
}

// this route will get a specific users post 'getUserPost/:id'
function getUserPost(req, res, next) {
  db
    .any(
      "SELECT post_image, username, id FROM posts JOIN users ON posts.user_id=users.id WHERE posts.user_id=${id}",
      { id: req.params.id }
    )
    .then(data => {
      res.status(200).json({
        userPost: data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({});
    });
}

// this routes add likes into the likes table
function addLikes(req, res, next) {
  db
    .none("INSERT INTO likes (liker_id, post_id) VALUES(${liker}, ${post})", {
      id: req.user.id,
      post: req.body.post_id
    })
    .then(data => {
      res.status(200).json({
        likes: data
      });
    })
    .catch(err => {
      console.log(`err on addLikes`, err);
      res.status(500).json({
        likes: err
      });
    });
}

function getPostLikes(req, res, next) {
  db
    .one(
      "SELECT Count(*) FROM posts JOIN likes ON likes.post_id=posts.id WHERE likes.post_id=${post_id}",
      req.body.post_id
    )
    .then(data => {
      res.status(200).json({
        likes: data
      });
    })
    .catch(err => {
      console.log(`Feed err`, err);
      res.status(500).json({
        data: "Feed could not be loaded"
      });
    });
}

function getFollowersCount(req, res, next) {
  db
    .one("SELECT COUNT(followee_id) FROM follows WHERE follower_id=${user}", {
      user: req.params.id
    })
    .then(data => {
      res.status(200).json({
        followerInfo: data
      });
    });
}

function getFollowersIDs(req, res, next) {
  db
    .any("SELECT followee_id FROM follows WHERE follower_id=${user}", {
      user: req.params.id
    })
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: `getfollowersIDs count not be found`
      });
    });
}

function getFolloweesCount(req, res, next) {
  db
    .one("SELECT COUNT(follower_id) FROM follows WHERE followee_id=${user}", {
      user: req.params.id
    })
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: `getfolloweesCount count not be found`
      });
    });
}

function getFollowees(req, res, next) {
  db
    .any("SELECT follower_id FROM follows WHERE followee_id=${user}", {
      user: req.params.id
    })
    .then(data => {
      res.status(200).json({
        data: data
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        data: `getfollowes count not be found`
      });
    });
}

function addFollowers(req, res, next) {
  db
    .none(
      "INSERT INTO follows (follower_id, followee_id) VALUES(${follower_id}, ${followee_id})",
      { follower_id: req.params.id, followee_id: req.user.id }
    )
    .then(data => {
      res.status(200).json({
        follow: data
      });
    })
    .catch(err => {
      res.status(500).json({
        follow: "follower not added"
      });
    });
}

module.exports = {
  registerUser,
  newPost,
  getUserPost,
  addLikes,
  getPostLikes,
  getFollowersCount,
  logoutUser,
  getFollowersIDs,
  getFolloweesCount,
  getFollowees,
  addFollowers,
  getUser
};
