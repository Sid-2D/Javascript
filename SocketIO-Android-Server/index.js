var express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io')(http)

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

http.listen(3000, () => {
	console.log('Server listening on port:', 3000)
})

io.on('connection', socket => { 
	console.log('User connected')
	socket.on('disconnect', () => console.log('User disconnected'))
	socket.on('appEvent', message => {
		console.log('App says:', message)
		io.emit('browserServerEvent', message)
	})
	socket.on('browserEvent', message => {
		console.log('Browser says:', message)
		io.emit('serverEvent', message)
	})
})