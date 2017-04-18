var expect = require('chai').expect;

function returnEven() {
	return 2;
}

function returnOdd() {
	return 1;
}

describe('Even test:', function () {
	it('#Should return even', function () {
		expect((function () {
			return returnEven() % 2 === 0;
		})()).to.equal(true);
	});
	it('#Should not return even', function () {
		expect((function () {
			return returnEven() % 2 === 1;
		})()).to.equal(false);
	});
});