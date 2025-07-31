const express=require('express')
const hostRouter=express.Router();

// const getAddHome=require('../controller/home')
const homesController=require('../controller/HomeRegistration')

//can name as ...controller
// hostRouter.get('/add-home',getAddHome)
hostRouter.get('/add-home',homesController.getAddHome)


hostRouter.post('/add-home',homesController.postHome)

exports.hostRouter=hostRouter
