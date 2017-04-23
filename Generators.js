/*Introductory example*/
var	x = 1;
function *foo()	{
	x++;
	console.log((yield "Next msg"));	//	pause!
	console.log("x:", x);
	return "Final msg";
}
function bar() {
	x++;
}
var it = foo();
// Message not sent here as the generator is invoked here
console.log(it.next("Yield msg1"));
console.log("First it over");
bar();
// Message is sent here as the generator resumes execution
console.log(it.next("Yield msg2"));

/*Simle example to see that generator can behave like a function*/ 
function *foo1(x,y)	{
	return	x * y;
}

var	it = foo1(6, 7);
// Now run
var	res	= it.next();
// Since no yield, done = true in 1 step
console.log(res);