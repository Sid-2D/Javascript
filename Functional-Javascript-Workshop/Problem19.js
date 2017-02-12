var slice = Function.call.bind(Array.prototype.slice);

module.exports = slice;

function sliceArgs() {
	console.log(slice(arguments, 0));
}

sliceArgs("Asdad", "fsdfa", "EfEFef");