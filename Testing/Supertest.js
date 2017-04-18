var request = require('supertest');

function checkResult(res) {
	console.log("\tSupposed response: Server working");
	console.log("\tReceived response:", res.text.substr(0, 14));
	if (!/Serverworking/.test(res.text)) {
		throw new Error("Incorrect respone.");
	} else {
		console.log("\tCorrect Response Received");
	};
}

function checkArray(res) {
	if (Array.isArray(res.body)) {
		if (res.body.length == 2) {
			return;
		}
		throw new Error("Incorrect array length received");		
	}
	throw new Error("Array not received");
}

describe("Get request", function () {
	// GET `/`
	it("#Should get proper text from route: `/`", function (done) {
		this.timeout(40);
		request('localhost:3000')
			.get('/')
			.end(function checkResult(err, res) {
				console.log("\tSupposed response: Server working");
				console.log("\tReceived response:", res.text.substr(0, 14));
				if (!/Serverworking/.test(res.text)) {
					throw new Error("Incorrect respone.");
				}// else {
					console.log("\tCorrect Response Received");
				//};
				done();
			});
	});
	// GET `/course/long`
	it("#Should get an array containing 2 objects from `/course/long`", function (done) {
		this.timeout(0);
		request('localhost:3000')
			.get('/course/long')
			.expect(checkArray)
			.expect(200, done);
	});
});