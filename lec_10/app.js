const express=require('express')
const userRouter=require('./routes/userRouter')
const hostRouter=require('./routes/hostRouter')
const path=require('path')

const rootDir=require("./utils/pathUtil")

const app=express();
//parse bosy for every post
app.use(express.urlencoded())
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})
//for common path
app.use(userRouter) //middleware
app.use('/host',hostRouter) //middleware
// app.use(,hostRouter) //middleware

//error 404 handling
//pura middleware pass ho chuka hai koi response nhi gya to app yaha tk aaya hai 
//to page not found
//status code is necessary

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,"views",'404.html'))
    res.status(404).sendFile(path.join(rootDir,"views",'404.html'))

})


app.listen(3000,()=>{
    console.log("started")
})