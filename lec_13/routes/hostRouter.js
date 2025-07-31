const express=require('express')
const hostRouter=express.Router();
const path=require('path')
const rootDir=require('../utils/pathUtil')
// const getAddHome=require('../controller/home')
const homesController=require('../controller/home')

//can name as ...controller
// hostRouter.get('/add-home',getAddHome)
hostRouter.get('/add-home',homesController.getAddHome)


hostRouter.post('/add-home',homesController.postHome)

exports.hostRouter=hostRouter
