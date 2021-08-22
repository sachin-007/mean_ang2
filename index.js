const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/database')

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('could not connected to database',err)
    }
    else{
        // console.log(config.secret);
        console.log("connect to batabase"+config.db);
    }
})

app.get('*',(req,res)=>{
    res.send("<h1>hello world</h1>")
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
}) 