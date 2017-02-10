var HTTP = require("q-io/http");

HTTP.read("http://localhost:7000")
	.then(function (id) {
		return HTTP.read("http://localhost:7001/" + id);
	}).then(function (user) {
		user = JSON.parse(user);
		console.log(user);
	}).then(null, console.log);