const express = require('express')
const app = express()
const POST = 4001

app.listen(POST,()=>{
    console.log("Start POST 4001")
})

app.get('/',(req,res)=>{
    res.send("this is Home 4001")
})

module.exports = app