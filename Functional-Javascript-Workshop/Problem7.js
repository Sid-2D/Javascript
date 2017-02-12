var index = 0;
function reduce(arr, fn, initial) {
	initial = fn(initial, arr[index], index++, arr);
	if (index < arr.length) {
		return reduce(arr, fn, initial);
	}
	return initial;
}
// console.log(reduce(["apple", "apple", "cat"], helper, {}));
module.exports = reduce;
function helper(accumulator, word) {
	if (accumulator[word]) {
		accumulator[word]++;
		return accumulator;
	}
	accumulator[word] = 1;
	return accumulator;
}