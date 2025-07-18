const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    //res return data
    if(req.url==='/'){
        res.setHeader('content-type', 'text/html')
        res.write("HOME page")
        return res.end()
    }
    else if(req.url==='/product'){
        res.setHeader('content-type', 'text/html')
        res.write("product page")
        return res.end()
        
    }
    
    res.setHeader('content-type', 'text/html')
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a simple HTML page with some text.</p>
  <p>HTML stands for HyperText Markup Language.</p>
</body>
</html>
`)


    res.end();

})
server.listen(3001)