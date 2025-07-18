const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.setHeader('content-type','text/html')
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basic HTML Form</title>
</head>
<body>
  <h2>Contact Form</h2>
  <form action="submit" method="POST">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

    <input type="submit" value="submit">
  </form>
</body>
</html>
`)
        return res.end();
    }
    else if(req.url=='/submit' && req.method==="POST"){
      fs.writeFileSync('user.txt',"jhyusdfdhj")
      res.statusCode=302
      res.setHeader('location','/')
    return res.end()

    }

    res.setHeader('content-type','text/html')
    res.write('fgsdgh')
    res.end()

})
server.listen(3004);