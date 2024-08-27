const express = require("express");
const router = express.Router();
const authController = require('../Controller/auth_Controller')
router.route('/login').post(()=>(authController.login));
router.route('/userdata').get(()=>(authController.UserData))
module.exports = router;