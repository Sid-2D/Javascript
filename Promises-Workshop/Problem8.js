function attachTitle(arg) {
	return "DR. " + arg;
}

var promise = Promise.resolve("MANHATTAN");

promise.then(attachTitle)
	   .then(console.log);

/*
'use strict';

function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);
*/