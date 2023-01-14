
const http = require('http')

const express = require('express')

const bodyparser = require('body-parser')

const app = express()

const adminrouts = require('./routes/admin')

const shoprouts = require('./routes/shop')


app.use(bodyparser.urlencoded({extended:false}))

app.use("/admin",adminrouts)
app.use('/shop',shoprouts)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found </h1>')
})



 //here '/' means that the path is start from the / not /
app.listen(4000);