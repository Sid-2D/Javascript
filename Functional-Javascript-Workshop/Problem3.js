function doubleAll(numbers) {
	numbers = numbers.map(function(value) {
		return value * 2;
	});
	return numbers;
}
console.log(doubleAll([1, 2, 3]));

module.exports = doubleAll;