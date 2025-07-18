let http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req)
    console.log(res)
})
const PORT=3000
server.listen(PORT,"shubham")
// server.listen()