const db = require("../db/index");

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function registerUser(req, res, next) {
    const hash = authHelpers.createHashPassword(req.body.password)
    db.none('INSERT INTO users (email, full_name, username, password_digest) VALUES (${email}, ${fullName}, ${username}, ${password})',
        { email: req.body.email, fullName: req.body.fullName, username: req.body.username, password: hash })
        .then(() => {
            res.status(200)
                .json({
                    message: "Registration successful."
                })
        })
        .catch((err) => {
            console.log(`this is your error`, err)
            res.status(500)
                .json({
                    message: `Registration Failed    `, err
                })
        })
}

function addPost(req, res, next) {
    db
        .none('UPDATE users SET post=${post} WHERE username=${username}', { post: req.body.post, username: req.user })
        .then(() => {
            res.status(200)
                .json({
                    message: 'successfully updated user post'
                })
        })
        .catch((err) => {
            res.status(500)
                .json({
                    message: 'FAILED: couldnt update user post'
                })
        })
}

function getUserPost(req, res, next) {
    db
        .one('SELECT post FROM users WHERE username=${username}', req.user)
        .then((data) => {
            res.status(200)
                .json({
                    post: post
                })
        })
        .catch((err) => {
            res.status(500)
                .json({
                    post: 'Not found'
                })
        })
}

function getAllPost(req, res, next) {
    db
        .any('SELECT post FROM users')
        .then((data) => {
            res.status(200)
                .json({
                    allPost: data
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(500)
            .json({
                allPost: 'Not found'
            })
        })
}



function getAllUsers(req, res, next) {
    db
        .any('SELECT username FROM users')
        .then((data) => {
            res.status(200)
                .json({
                    data: data
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(409)
                .json({
                    data: 'Not found'
                })
        })
}

function getUser(req, res, next) {
    db
        .one("SELECT * FROM users where username = ${username}", req.user)
        .then(function (user) {
            res.status(200).json({
                status: "success",
                user: user,
                message: "Fetched one user"
            });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getUserLikes (req, res, next) {
    db
      .one('SELECT likes FROM users WHERE username=${username}', req.user)
      .then((likes) => {
          res.status(200)
          .json({
            likes: likes
          })
      })
      .catch((err) => {
          console.log(err)
          res.status(500)
          .json({
              likes: 'Likes, Not Found'
          })
      })
}

function updateLikes (req, res, next) {
    db
    .none('UPDATE users SET likes=${likes} WHERE username=${username}')
    .then((allLikes) => {
        res.status(200)
        .json({
            allLikes: allLikes
        })
    })
    .catch((err) => {
        res.status(500)
        .json({
            allLikes: 'all likes not found'
        })
    })
}

function getAllInfo(req, res, next) {
    db
    .any('SELECT * FROM users')
    .then((info) => {
        res.status(200)
        .json({
            data: info
        })
    })
    .catch((err) => {
        console.log(`getallInfo err`, err)
        res.status(500)
        .json({
            data: 'getallInfo not found'
        })
    })
}





function logoutUser(req, res, next) {
    req.logout();
    res.status(200).send("log out success");
}




// post request have req.body










module.exports = {
    registerUser,
    getAllUsers,
    getUser,
    logoutUser,
    addPost, 
    getAllPost,
    getUserPost, 
    updateLikes,
    getUserLikes, 
    getAllInfo
}