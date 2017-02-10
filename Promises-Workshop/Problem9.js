function parsePromised() {
	var promise = new Promise(function (fulfill, reject) {
		try {
			JSON.parse(process.argv[2]);
			fulfill("fulfilled");
		} catch (err) {
			reject(err);
		}
	});
	return promise;
}

parsePromised()
	.then(console.log, console.log);

/*
'use strict'

function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised(process.argv[2])
.then(null, console.log)
*/