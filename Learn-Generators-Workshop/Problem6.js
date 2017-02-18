function askFoo() {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run(generator) {
  var it = generator();
  var p = it.next();
  console.log(p.value.then(console.log));
}

run(function* () {
  var foo = yield askFoo();
  console.log(foo.then());
})