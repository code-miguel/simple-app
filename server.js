var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000);

//serve static files to express
app.use(express.static('client'));

//set up socket on server side
var io = socket(server);
io.on('connection', (socket) => {
	//console.log('made socket connection');
	
	socket.on('chat', (data) => {
		//console.log(data);
		io.sockets.emit('chat', data); //send data to messageBoard tag to all sockets connected to 	
	});

	socket.on('typing', (data) => {
		socket.broadcast.emit('typing', data);
		
	});
	
		 
});
