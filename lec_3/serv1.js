// creating first node server
//module import
let http=require('http')

function requestListener(req,res){
    console.log(req)

}
// http.createServer(requestListener)
const server=http.createServer(requestListener)
server.listen(3000)