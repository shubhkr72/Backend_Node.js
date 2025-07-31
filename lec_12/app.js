const express=require('express')
const userRouter=require('./routes/userRouter')
const {hostRouter}=require('./routes/hostRouter')
const path=require('path')

const rootDir=require("./utils/pathUtil")

const app=express();
//set ejs
app.set('view engine','ejs')
app.set('views','views')
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

//making public publicly accessible
app.use(express.static(path.join(rootDir,'public')))

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found'})
})


app.listen(3000,()=>{
    console.log("started")
})