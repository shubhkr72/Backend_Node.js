const express=require('express')
const app=express();

app.use('/',(req,res,next)=>{
    console.log("first",req.url, req.method)
    next()

})

app.use('/',(req,res,next)=>{
    console.log("second",req.url,req.method)
    next()

})
app.use('/',(req,res,next)=>{
    console.log("thhird",req.url,req.method)
    next()
    // res.send("<h1>Shubham kumar</h1>")

})
app.get('/contact-us',(req,res,next)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basic HTML Form</title>
</head>
<body>
  <h2>Contact Form</h2>
  <form action="#" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>

    <input type="submit" value="Submit">
  </form>
</body>
</html>
`)
})

app.post('/contact-us',(req,res,next)=>{
  
  res.send("<h1>response submitted</h1>")

})


app.listen(3000,()=>{
    console.log('started')
})