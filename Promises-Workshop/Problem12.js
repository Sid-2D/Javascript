var HTTP = require("q-io/http");

HTTP.read("http://localhost:1337").then(function (content) {
	console.log(JSON.parse(content));
});

/*
var qhttp = require('q-io/http');
qhttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()
*/