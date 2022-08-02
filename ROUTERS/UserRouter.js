const express = require('express')
const router = express.Router()
const userController = require('../CONTROLLERS/userController')
const verifyapikey = require('../MIDDLEWARES/apikeyverify')

router.post('/createuser',verifyapikey, userController.createUser);
router.get('/getuser',userController.getUser);

module.exports = router;