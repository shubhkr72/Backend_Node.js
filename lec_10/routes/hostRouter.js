const express=require('express')
const hostRouter=express.Router();
const path=require('path')
const rootDir=require('../utils/pathUtil')

hostRouter.get('/add-home',(req,res,next)=>{
    // res.send()
    res.sendFile(path.join(rootDir,"views",'addHome.html'))
})

hostRouter.post('/add-home',(req,res,next)=>{
    console.log(req.body)
    // res.send()
    res.sendFile(path.join(rootDir,"views",'homeAdded.html'))
})


module.exports=hostRouter