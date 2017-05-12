console.log("-----------------------------------------------------");
console.log("Javascript Async");
console.log("-----------------------------------------------------");

function usingTick() {
	process.nextTick(function () {
		console.log("usingTick");
	});
}

function usingTimeout() {
	setTimeout(function() {
		console.log("usingTimeout");
	}, 0);
}

usingTimeout();
usingTick();
console.log("default");
