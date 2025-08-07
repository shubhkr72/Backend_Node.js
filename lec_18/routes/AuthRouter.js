const express = require('express')
const AuthRouter = express.Router();
const AuthController = require('../controller/AuthController');

AuthRouter.get('/login',AuthController.GetLoginPage)
AuthRouter.post('/login',AuthController.PostLoginPage)
// AuthRouter.get('/logout', AuthController.GetLogoutPage);
AuthRouter.post('/logout', AuthController.PostLogoutPage);
AuthRouter.get('/signup', AuthController.getSignupPage);

exports.AuthRouter = AuthRouter