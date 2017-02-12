function countWords(inputWords) {
	return inputWords.reduce((accumulator, word) => {
		if (accumulator[word]) {
			accumulator[word]++;
			return accumulator;
		}
		accumulator[word] = 1;
		return accumulator;
	}, {});
}
console.log(countWords(["apple", "apple", "cat"]));
module.exports = countWords; 