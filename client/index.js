//set up socket on client
var socket = io.connect('http://localhost:4000');

var messageBoard = document.getElementById('message-board');
var nameInput = document.getElementById('nameInput');
var message = document.getElementById('message');
var submitButton = document.getElementById('submit-button');
var typer = document.getElementById('typer');

submitButton.addEventListener('click', () => { // user clicks send
	//emit message thru socket to server
	socket.emit('chat', {
		nameInput: nameInput.value,
		message: message.value
	});		
});


message.addEventListener('keypress', () => {
	socket.emit('typing', {
		user: nameInput.value
		
	});
	
});

//listen to the socket
socket.on('chat', (data) => {
	typer.innerHTML = "";
	messageBoard.innerHTML = data.nameInput + '<br>' + data.message;
	
});

//listen
socket.on('typing', (data) => {
	typer.innerHTML = data.user + "is typing...";
});



