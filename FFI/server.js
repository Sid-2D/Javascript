var ffi = require("ffi");

var user32 = ffi.Library('user32', {
    'SetCursorPos': [ 'long', ['long', 'long'] ]
});
var x = y = 0
setInterval(() => {
	user32.SetCursorPos(x, y)
	x++, y++
}, 1000/60)