//core module
// const http=require('http')

//external module
const express=require('express')
//local module

const app=express()

// const server=http.createServer(app);
//middleware
app.use((req, res, next)=>{
    console.log("first")
    console.log(req.url,req.method)
    next()  //call next or send response
})

app.use((req, res, next)=>{
    console.log("second")
    console.log(req.url,req.method)
    res.send('<h1>WelCome to calculator page</h1>')
})

const PORT=3005
app.listen(PORT,()=>{
    console.log('server started')
})