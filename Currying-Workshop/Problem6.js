var curryFunction = function(fn) {
	var arity = fn.length;
	var curried = function() {
		var args = Array.prototype.slice.call(arguments, 0);
		if (arity === args.length) {
			return fn.apply(null, args);
		} else {
			return function() {
				var newArgs = Array.prototype.slice.call(arguments, 0);
				return curried.apply(null, args.concat(newArgs));
			}
		}
	}
	return curried;
};

var add = function(a, b, c) {
	return a + b + c;
};

var curried = curryFunction(add);
console.log(curried(1, 2)(3));
console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1)(2)(3));

module.exports = curryFunction;