var dgram = require('dgram'),
	server = dgram.createSocket('udp4');

server.on('listening', function () {
	var address = server.address();
	console.log('UDP server on', address.address, ':', address.port);
});

server.on('message', function (message, remote) {

	console.log(remote.address, ':', remote.port, '-', message.toString());
});

server.bind(3000, 'localhost');