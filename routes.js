const fs = require('fs')   // this module is inport the things

const requesthandler = (req,res) =>{
const path = require('path')
const url = req.url
const method = req.method
if(url === '/'){
    const filepath = path.join(__dirname,"message.txt")
    fs.readFile('message.txt',{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log('data from file'+ data)
        res.setHeader('content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title><head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end(); 
    })

 } 
 else if(url === "/message" && method === "POST"){
    const body = []
    req.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk)
    })
    return req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString()
        const message = parsedBody.split('=')[1]
        fs.writeFileSync('message.txt',message,(err)=>{
            console.log(`indise fs.writefile`)
            console.log(parsedBody)
            res.statusCode = 302
            res.setHeader('Location','/')
            return res.end()
        })
    })
 }
}
module.exports = {
    handler: requesthandler,
    someText:"some hard coded text"
}  // store our function as a object
//module.exports = requesthandler;  // module for the export the things and we assign all our program to the module export

//now we can import from that routes.js file by requiring it and node will look for module exports and see if something was registered for this file here,
//we do register something in module exports, the request handler and you can register anything here. we register our js finction
//module.exports.handler = requesthandler
//module.exports.someText ='some hard coded text'
// exports.handler = requesthandler
// exports.someText ='some hard coded text'
// also indicate the multiple moduls merged into single export
