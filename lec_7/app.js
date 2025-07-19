const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url);

});

const PORT=3006
server.listen(PORT,(PORT)=>{
    console.log(`running on ${PORT}`)

})