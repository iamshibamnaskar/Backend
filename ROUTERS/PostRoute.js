const express = require('express')
const router = express.Router()
const postcontroller = require('../CONTROLLERS/postcontroller');
const { route } = require('./UserRouter');


router.post('/createpost',postcontroller.createPost);
router.get('/getposts',postcontroller.getPosts);
router.post('/deletepost',postcontroller.deletePost);
router.post('/updatepost',postcontroller.updatePost);


router.get('/getimages',postcontroller.getImages);
router.post('/uploadimage',postcontroller.CreateImage);
router.post('/deleteimage',postcontroller.deleteImage);


router.get('/getresponses',postcontroller.getResponses);
router.post('/createresp',postcontroller.createresponse);
// router.post('/cazzpost',postcontroller.Cazzapost);
// router.get('/getuser',userController.getUser);

module.exports = router;