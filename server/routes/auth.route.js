const express = require('express');
const router = express.Router();
const {registerClient,loginClient, logout} = require('../controller/auth.controller');
const {createClientValidation,loginValidation} = require("../validators/userValidation");
const checkValidation = require("../middlewares/checkValidation");
const protectedRoute = require("../middlewares/protectedRoute");



router.post('/register-client', createClientValidation,checkValidation,registerClient);
router.post('/login-client', loginValidation,checkValidation,loginClient);
router.post('/logout',protectedRoute,logout)


module.exports = router;