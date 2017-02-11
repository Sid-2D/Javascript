var fn1 = function(x) {
	var fn2 = function(y) {
		return x + y;
	};
	return fn2;
}
module.exports = fn1;