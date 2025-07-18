const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'|| req.url==='/home'){
        //home navigation
        res.setHeader('content-type','text/html')
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Myntra</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    nav {
      background-color: #ff3f6c;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1rem 0;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    nav a:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  </style>
</head>
<body>
  <nav>
    <a href="/home">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/kid">Kid</a>
    <a href="/cart">Cart</a>
  </nav>
</body>
</html>
`)
        return res.end()
    }else if(req.url==='/men'){
        res.setHeader('content-type','text/html')
        res.setHeader('location','/')
        res.write("welcome to men section")
        return res.end()
        
    }
    else if(req.url==='/women'){
        res.setHeader('content-type','text/html')
        res.setHeader('location','/women')
        res.write("welcome to women section")
        return res.end()

    }
    else if(req.url==='/kid'){
        res.setHeader('content-type','text/html')
        res.setHeader('location','/kid')
        res.write("welcome to kid section")
        return res.end()

    }
    else if(req.url==='/cart'){
        res.setHeader('content-type','text/html')
        res.setHeader('location','/cart')
        res.write("welcome to kart section")
        return res.end()

    }
     res.setHeader('content-type','text/html')
     res.write("wrong WAY")
     res.statusCode=404;
    return res.end()




})

const PORT=5001
server.listen(PORT)