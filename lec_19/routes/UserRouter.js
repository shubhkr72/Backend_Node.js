//core module
const express=require('express')
const UserRouter=express.Router();

// const {RegisterHomes, RegisteredHomes}=require('./AdminRouter')
const HomePage=require('../controller/HomePageController');
const About=require('../controller/AboutPageController');
const Contact=require('../controller/contactUsController');
const LoginController=require('../controller/AuthController');
// const getHomeDetails=require('../controller/')

UserRouter.get('/',HomePage.GetHomePage)
UserRouter.get('/home/:homeId',HomePage.GetHomeDetails)
UserRouter.get('/about',About.GetAboutPage)
UserRouter.get('/contact',Contact.GetContactPage)
UserRouter.post('/contact',Contact.PostContactPage)
UserRouter.get('/contact/ThanksContactUs', Contact.GetThanksContactUsPage)

module.exports=UserRouter