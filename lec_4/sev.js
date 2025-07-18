const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req);
    process.exit(); //exit event loop

})
server.listen(3000)