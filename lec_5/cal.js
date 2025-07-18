const http = require('http')
const calculator = (req, res) => {
    if (req.url==='/') {
        res.setHeader('content-type', 'text/html')
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>WelCome to home page</h1>
        <a href="/calculator">Calculator</a>
    </div>
</body>
</html>`)
        return res.end()
    } else if (req.url === "/calculator" ) {
        res.setHeader('content-type', 'text/html')
        res.setHeader('location', '/cal')
        res.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <h1>WelCome to calculator page</h1>
        <!-- <a href="/cal">Calculator</a> -->
        <form action="/calculate-result" method="POST">
            <label for="num1">Number 1:</label>
            <input type="number" id="num1" name="num1" required><br><br>

            <label for="num2">Number 2:</label>
            <input type="number" id="num2" name="num2" required><br><br>

            <button type="submit">Sum</button>
        </form>

    </div>
</body>

</html>`)
        return res.end()

    }else if(req.url==='/calculate-result' && req.method==='POST'){

        // res.setHeader('location','/result')
        const databuffer=[];
        req.on('data',(chunk)=>{
            databuffer.push(chunk)
        })
        req.on('end',()=>{
            // const data=
            const data=Buffer.concat(databuffer).toString()
            const parseData=new URLSearchParams(data);
            const ObjData=Object.fromEntries(parseData);
            console.log(ObjData);
            const sum=parseInt(ObjData['num1'])+parseInt(ObjData['num2']);
            console.log(sum)
            res.setHeader('content-type','text/html')
            res.write(`${sum}`)
            return res.end()
        })
    }
    else if(req.url==='/result'){
        res.setHeader('content-type','text/html')
        res.write("result page")
        return res.end()
    }

}
module.exports=calculator