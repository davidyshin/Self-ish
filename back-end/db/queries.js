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
  db
    .one("SELECT * FROM users WHERE username=${username}", {
      username: req.user.username
    })
    .then(data => {
      res.status(200).json({ user: data });
    });
}

function getSingleUser(req, res, next) {
  db
    .one("SELECT * FROM users WHERE id=${id}", {
      id: req.params.id
    })
    .then(data => {
      res.status(200).json({ user: data });
    });
}

function newPost(req, res, next) {
  db
    .none(
      "INSERT INTO posts(post_image, caption, user_id, dates) VALUES(${url}, ${caption}, ${user_id}, ${date})",
      {
        url: req.body.url,
        caption: req.body.caption,
        user_id: req.body.user_id,
        date: req.body.date
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
      "SELECT post_image, username, users.id FROM posts JOIN users ON posts.user_id=users.id WHERE posts.user_id=${id}",
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

function getUserPostCount(req, res, next) {
  db
    .one("SELECT COUNT(post_image) FROM posts WHERE user_id=${user_id}", {
      user_id: req.params.id
    })
    .then(data => {
      res.status(200).json({
        postCount: data
      });
    })
    .catch(err => {
      console.log(`postCount err`, err);
      res.status(500).json({
        postCount: "Could not be found"
      });
    });
}

function editUser(req, res, next) {
  const hash = authHelpers.createHashPassword(req.body.password);
  db
    .none(
      "UPDATE users SET email = ${email}, full_name=${fullName}, password_digest=${password}, profile_pic=${profile_pic} WHERE id=${id}",
      {
        email: req.body.email,
        fullName: req.body.fullName,
        password: hash,
        profile_pic: req.body.profile_pic,
        id: req.body.id
      }
    )
    .then(() => {
      res.status(200).json({
        message: "successfully updated user"
      });
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

function getFollowers(req, res, next) {
  db
    .any(
      "SELECT username, followee_id FROM follows JOIN users ON follows.followee_id=users.id WHERE follower_id=${user}",
      {
        user: req.params.id
      }
    )
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
    .any(
      "SELECT username, follower_id FROM follows JOIN users ON follows.follower_id=users.id WHERE followee_id=${user}",
      {
        user: req.params.id
      }
    )
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

function getUserFeed(req, res, next) {
  db
    .any(
      "SELECT post_image, users.id, username, dates, posts.id, posts.caption FROM follows JOIN posts ON follows.followee_id=posts.user_id JOIN users ON follows.followee_id=users.id WHERE follower_id=${user} OR followee_id=${user} ORDER BY posts.id DESC",
      { user: req.user.id }
    )
    .then(data => {
      res.status(200).json({
        feed: data
      });
    })
    .catch(err => {
      console.log(`error rendering feed`, err);
      feed: "No data found";
    });
}

module.exports = {
  registerUser,
  editUser,
  newPost,
  getUserPost,
  getUserPostCount,
  addLikes,
  getPostLikes,
  getFollowersCount,
  logoutUser,
  getFollowers,
  getFolloweesCount,
  getFollowees,
  addFollowers,
  getSingleUser,
  getUser,
  getUserFeed
};
