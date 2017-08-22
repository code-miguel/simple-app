var MongoClient = require('mongodb').MongoClient;
var io = require('socket.io').listen(4000);


//Connect to mongoDB
MongoClient.connect('mongodb://localhost:27017/simpleData', (err, db) => {
	
	/* FIND WAY TO CONNECT TO SOCKET.IO
	//Connect to socket.io
	io.on('connection', () => {
		console.log('socket.io works');
	});
	
	*/
	
	console.log('hello');
		
});


