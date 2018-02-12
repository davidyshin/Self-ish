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
        .catch((err) =>{  
            console.log(`this is your error`, err)   
            res.status(500)
            .json({
                message: `Registration Failed    `, err
            })
        })
}



function getAllUsers(req, res, next) {
    db
    .any('SELECT username FROM users')
    .then((data)=> {
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
      .then(function(user) {
        res.status(200).json({
          status: "success",
          user: user,
          message: "Fetched one user"
        });
      })
      .catch(function(err) {
        return next(err);
      });
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
    logoutUser
}