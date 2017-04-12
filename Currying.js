var Multiply = function(x, y) {
	console.log(x * y);
};

Multiply(3, 3);

var MultiplyBy2 = Multiply.bind(null, 2);
MultiplyBy2(5);

var print6 = MultiplyBy2.bind(null, 3);
print6(2, 2);

Multiply.call(null, 3, 6);

Multiply.apply(null, [3, 7]);

var callMultiply = function() {
	if (arguments.length == 2) {
		return Multiply.call(null, arguments[0], arguments[1]);
	}
	var x = arguments[0];
	return function() {
		callMultiply.call(null, x, arguments[0]);
	}
}

callMultiply(2)(3);

var compose = (f, g) => x => f(g(x));
var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);
snakeCase('hello');