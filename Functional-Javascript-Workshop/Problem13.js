function Spy(target, method) {
	this.count = 0;
	var that = this;
	var fn = target[method];
	target[method] = function() {
		fn.apply(null, Array.prototype.slice.apply(arguments));
		that.count++;
	}
	return this;
}

module.exports = Spy