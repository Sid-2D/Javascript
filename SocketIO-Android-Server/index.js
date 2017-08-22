var express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	ffi = require("ffi");

var user32 = ffi.Library('user32', {
    'SetCursorPos': [ 'long', ['long', 'long'] ]
    // put other functions that you want to use from the library here, e.g., "GetCursorPos"
});

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

http.listen(3000, () => {
	console.log('Server listening on port:', 3000)
})

var lock = true, current = 0, buffer = []

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
	socket.on('mouseEvent', dir => {
		if (lock) {
			// console.log(dir)
			if (dir) {
				for (var i = current; i < 5 * speed; i += speed) {
					buffer.push(i)
				}
				current += 5
			} else {
				for (var i = current; i > current - 5 * speed; i -= speed) {
					buffer.push(i)
				}
				current -= 5 
			}
			setLock()
		}
	})
})

function setLock() {
	lock = false
	setTimeout(() => {
		lock = true
	}, 3)
}

function gameLoop() {
	if (buffer.length) {
		user32.SetCursorPos(buffer.shift(), 0)
	}
}

setInterval(gameLoop, 1000/60)