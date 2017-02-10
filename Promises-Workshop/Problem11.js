function all(p1, p2) {
	var counter = 0, arr = [];
	var promise = new Promise(function (fulfill, reject) {
		p1.then(function(value) {
			counter++;
			arr[0] = value;
			if (counter == 2) {
				fulfill(arr);
			}
		});
		p2.then(function(value) {
			counter++;
			arr[1] = value;
			if (counter == 2) {
				fulfill(arr);
			}
		});
	});
	return promise;
}

all(getPromise1(), getPromise2()).then(console.log);

/*
'use strict';

// global getPromise1, getPromise2

function all(a, b) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var out = [];

    a.then(function (val) {
      out[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    b.then(function (val) {
      out[1] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
*/