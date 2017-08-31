var express = require('express');
var socket = require('socket.io');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var server = app.listen(4000);

//Serving static files in Express
app.use(express.static('client'));

var io = socket(server); //set up socket on server side

MongoClient.connect('mongodb://127.0.0.1/test', (err, db) => {
	//if (err) throw err; 

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






});




