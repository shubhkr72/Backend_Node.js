//core module
const express=require('express')
const userRouter=express.Router();
const path=require('path')
const rootDir=require("../utils/pathUtil")
const {RegisterHomes, RegisteredHomes}=require('./hostRouter')

userRouter.get('/',(req,res,next)=>{
    console.log(req.url,req.method)

    console.log(RegisteredHomes)
    // res.sendFile(path.join(rootDir,"views",'home.html'))
    res.render('home',{RegisteredHomes:RegisteredHomes,
        pageTitle:'AirHome'
    })

})
module.exports=userRouter