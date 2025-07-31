const express=require('express')
const hostRouter=express.Router();
const path=require('path')
const rootDir=require('../utils/pathUtil')

hostRouter.get('/add-home',(req,res,next)=>{
    // res.send()
    // res.sendFile(path.join(rootDir,"views",'addHome.html'))
    res.render('addHome')
})


 const RegisteredHomes=[];


hostRouter.post('/add-home',(req,res,next)=>{
    console.log(req.body)
    // res.send()
    RegisteredHomes.push(req.body)
    // res.sendFile(path.join(rootDir,"views",'homeAdded.html'))
    res.render('homeAdded')
})


exports.hostRouter=hostRouter
exports.RegisteredHomes=RegisteredHomes