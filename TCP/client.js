var net = require('net'),
    client = new net.Socket();

client.connect(3000, 'localhost', function () {
    console.log('Connected to: localhost:3000');
    client.write('I am Chuck Norris!');
});

client.on('data', function(data) {
    console.log('Data:', data.toString());
    client.destroy();
});

client.on('close', function () {
    console.log('Connection closed');
});