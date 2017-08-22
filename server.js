var MongoClient = require('mongodb').MongoClient;

//Connection URL
MongoClient.connect('mongodb://localhost:27017/simpledata', (err, db) => {
	//if(err) throw err;
	
	db.close();
	
});
