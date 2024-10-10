const express = require('express');
const router = express.Router();
const {registerClient,loginClient, logout,authenticateToken} = require('../controller/auth.controller');
const {createClientValidation,loginValidation} = require("../validators/userValidation");
const checkValidation = require("../middlewares/checkValidation");
const protectedRoute = require("../middlewares/protectedRoute");

router.get("/check-auth",authenticateToken)


router.post('/register-client', createClientValidation,checkValidation,registerClient);
router.post('/login', loginValidation,checkValidation,loginClient);
router.post('/logout',protectedRoute,logout)

module.exports = router;