function duckCount() {
	var list = Array.prototype.slice.call(arguments);
	if (!list.length) {
		return 0;
	}
	var obj = list.shift();
	if (Object.prototype.hasOwnProperty.call(obj, "quack")) {
		return 1 + duckCount.apply(null, list);
	}
	return duckCount.apply(null, list);
}
var notDuck = Object.create({quack: "afsa"});
var Duck = {quack: "afsa"};
console.log(duckCount(notDuck, Duck));
module.exports = duckCount;
/*
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount
*/