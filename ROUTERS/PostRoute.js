const express = require('express')
const router = express.Router()
const postcontroller = require('../CONTROLLERS/postcontroller')


router.post('/createpost',postcontroller.createPost);
router.get('/getposts',postcontroller.getPosts);
router.post('/deletepost',postcontroller.deletePost);
router.post('/updatepost',postcontroller.updatePost);
// router.post('/cazzpost',postcontroller.Cazzapost);
// router.get('/getuser',userController.getUser);

module.exports = router;