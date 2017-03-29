var dgram = require('dgram'),
	message = new Buffer('Stayin alive');
var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 3000, 'localhost', function (err, bytes) {
	if (err) {
		throw err;
	}
	console.log('UDP message sent to localhost:3000');
})