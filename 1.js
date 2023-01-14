
const http = require('http')

const express = require('express')

const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended:false}))


app.use('/add-product',(req, res, next)=>{
        res.send('<form action="/product" method="POST"><input type ="text" name = "title"><input type ="text" name = "title"><button type="submit">add</button></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next)=>{
   
    res.send('<h1>hello from express</h1>')
}) //here '/' means that the path is start from the / not /
app.listen(4000);