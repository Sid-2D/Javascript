module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function (accumulator, cur) {
		accumulator.push(fn(cur))
		return accumulator;
	}, []);  
}