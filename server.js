const path = require('path');
const http = require('http');
const publicpath = path.join(__dirname,'\\public')
const express = require('express');
const PORT = process.env.PORT || 5050;
const socketIO = require('socket.io');

var app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicpath));
io.on('connection',(socket)=>{
  console.log('user just connected');
  socket.on('disconnect',()=>{
    console.log('user just disconnected');
  });
});


server.listen(PORT,()=>{
  console.log(`Server is up on port ${PORT}`)
});