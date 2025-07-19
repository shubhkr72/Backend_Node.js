//core module
// const http=require('http')

//external module
const express=require('express')
//local module

const app=express()

// const server=http.createServer(app);
//middleware
//we can also use path
app.use('/',(req, res, next)=>{
    console.log("first")
    console.log(req.url,req.method)
    next()  //call next or send response
    // res.send('<h1>WelCome to home page</h1>')
})

app.use('/submit',(req, res, next)=>{
    console.log("second")
    console.log(req.url,req.method)
    res.send('<h1>WelCome to submit page</h1>')
})
app.get()
app.post()

const PORT=3005
app.listen(PORT,()=>{
    console.log('server started')
})