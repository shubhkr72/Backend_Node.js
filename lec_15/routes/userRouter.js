//core module
const express=require('express')
const userRouter=express.Router();
const path=require('path')
const rootDir=require("../utils/pathUtil")
const {RegisterHomes, RegisteredHomes}=require('./hostRouter')
const HomePage=require('../controller/homePage')
// const getHomeDetails=require('../controller/')

userRouter.get('/',HomePage.getHomePage)
userRouter.get('/home/:homeId',HomePage.getHomeDetails)
module.exports=userRouter