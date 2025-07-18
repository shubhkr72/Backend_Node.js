const http=require('http')
const userHandler=require('./parsing')
const calculator=require('./cal')
const server=http.createServer(calculator);

const PORT=3000
server.listen(PORT,(PORT)=>{
    console.log(`running on ${PORT}`)

})