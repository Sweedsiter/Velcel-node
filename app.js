const express = require('express')
const app = express()
const POST = 4001
const uri = "mongodb+srv://d27saitunlu:cQ8ppx22JYaohtq1@cluster0.mtjpud0.mongodb.net/productDB2";

app.listen(POST,()=>{
    console.log("Start POST 4001")
})

app.get('/',(req,res)=>{
    res.send("this is Home 4001")
})

app.get('/product',(req,res)=>{
    res.json(uri)
})

module.exports = app