var fn = function(x) {
	return function (y) {
		if (!y) {
			return x;
		}
		return fn(x + y);
	}
}
console.log(fn(1)(2)(3)());