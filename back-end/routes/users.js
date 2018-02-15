var express = require('express');
var router = express.Router();
var db = require('../db/queries')
var passport = require('../auth/local')
const { loginRequired } = require("../auth/helpers");





/* GET users listing. */

//User login/logout and registration ROUTES
router.post('/new', db.registerUser);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
})
router.get('/logout',loginRequired, db.logoutUser)
router.get('/getUser', loginRequired, db.getUser)


// FEED ROUTES






// POST ROUTES
router.post('/newPost', loginRequired, db.newPost)
router.get('/getUserPost/:id', db.getUserPost)


// LIKES ROUTES
router.get('addLikes', db.addLikes)
router.get('getPostLikes', db.getPostLikes)





// // FOLLOWERS ROUTES
router.post('/addFollower/:id', loginRequired, db.addFollowers)
router.get('/getFollowersCount/:id', db.getFollowersCount)
router.get('/getFollowersIDs/:id', db.getFollowersIDs)
router.get('/getFolloweesCount/:id', db.getFolloweesCount)
router.get('/getFollowees/:id', db.getFollowees)







module.exports = router;
