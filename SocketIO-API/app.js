var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	path = require('path')

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

var clients = 0;

// --------------------------
// Custom events
// io.on('connection', socket => {
// 	console.log('A user connected.')
// 	setTimeout(() => {
// 		socket.emit('jsonEvent', { message: 'Custom json event' })
// 	}, 1000)
// 	socket.on('clientJson', data => {
// 		console.log(data.message)		
// 	})
// })
// --------------------------


// ---------------------------
// Broadcasting
// io.on('connection', socket => {
// 	clients++;
// 	socket.emit('newclientconnect', {message: 'Welcome home.'})
// 	socket.broadcast.emit('newclientconnect', { message: clients + ' clients connected.' })
// 	socket.on('disconnect', () => {
// 		clients--;
// 		socket.broadcast.emit('newclientconnect', { message: clients + ' clients left.' })		// io.sockets.emit sends event to even the client that caused it, socket.broadcast prevents that
// 	})
// })
// ---------------------------

// ---------------------------
// Namespaces
// var nsp = io.of('/my-namespace')
// nsp.on('connection', socket => {
// 	console.log('someone connected')
// 	nsp.emit('nsEvent', 'hello')
// })
// ---------------------------

// Rooms
var roomNumber = 1
io.on('connection', socket => {
	if (io.nsps['/'].adapter.rooms['room-' + roomNumber] && io.nsps['/'].adapter.rooms['room-' + roomNumber].length > 1) {
		roomNumber++
	}
	socket.join('room-' + roomNumber)
	io.sockets.in('room-' + roomNumber).emit('connectToRoom', 'You are in room number: ' + roomNumber)
})

http.listen(3000, () => {
	console.log('Listening on 3000')
})