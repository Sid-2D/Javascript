var net = require('net'),
    server = net.createServer();

server.listen(3000, 'localhost', () => {
	console.log('Server listening on ', server.address().address, ':', server.address().port);
});

server.on('connection', function (socket) {
	console.log('Connected: ', socket.remoteAddress, ':', socket.remotePort);
	socket.on('data', function (data) {
		console.log('Data:', socket.remoteAddress, ':', data.toString());
		socket.write('You said: ' + data);
	});
	socket.on('close', function (data) {
		console.log('Closed:', socket.remoteAddress, ' ', socket.remotePort);
	});
	socket.on('error', err => console.log(err));
});

server.on('error', err => console.log(err));