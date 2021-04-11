let socket = io();
  socket.on('connect',function (){
    console.log('connected to server');
  });

  socket.on('disconnect',function (){
    console.log('disconnected from server');
  });

  socket.on('newMessage',function (message) {
    console.log(message);
    $('.messages').append(`<li>${message.text}</li>`);
    
  });

function sendData(){
  var a = $("#ta").val();
  // alert(a);
  socket.emit('message',{
    text:a
  })
}