var fs = require('fs');

function run(generator) {
  var it = generator(cb);
  function cb(err, result) {
    if (err) {
      it.throw(err);
    } else {
      it.next(result);
    }
  }
  cb();
}

run(function* (done) {
  var firstFile = null;
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done);
    firstFile = dirFiles[0];
  } catch (e) {
    firstFile = null;
  }
  console.log(firstFile);
});