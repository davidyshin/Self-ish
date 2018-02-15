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




// FEED ROUTES
// router.get('/getFeed', loginRequired, db.getFeed)





// POST ROUTES
router.post('/newPost', loginRequired, db.newPost)
router.get('/getUserPost/:id', db.getUserPost)


// LIKES ROUTES


// router.patch('/updateLikes', loginRequired, db.updateLikes)
// router.get('/getUserLikes', loginRequired, db.getUserLikes)



// // FOLLOWERS ROUTES
router.get('/getFollowers', db.getFollowers)
router.post('/addFollowers/:id', loginRequired, db.addFollowers)


// router.get('/getAllPost', loginRequired, db.getAllPost)

// router.post('/addPost', loginRequired, db.addPost)
// router.get('/getAllInfo', loginRequired, db.getAllInfo)


// router.get('/getFeed', loginRequired, db.getFeed)
module.exports = router;
