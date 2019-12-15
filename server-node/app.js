const express=require('express');
const http=require('http');
const app=express();
const conn = require('./conn/conn');
const route = require('./routes/index');
const config =require('./config/express')

config(app);

const PORT = process.env.PORT || 4000;
const server=http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server up and running on port ${PORT}`)
});




