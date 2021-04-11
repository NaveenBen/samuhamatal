const path = require('path');
const publicpath = path.join(__dirname,'\\public')
const express = require('express');
const PORT = process.env.PORT || 5050;

var app = express();
app.use(express.static(publicpath));

app.listen(PORT,()=>{
  console.log(`Server is up on port ${PORT}`)
});