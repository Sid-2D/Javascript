var print, increase, setNum, setObj;

function createNewClosure() {
	// Local variable that will be available to all function declared in this scope
	var num = 1;
	var obj = {
		"key1" : 1,
		"key2" : 2
	};
	print = () => {
		console.log("Num = " + num);
		console.log("Obj.key1 = " + obj.key1);
		console.log("Obj.key2 = " + obj.key2 + "\n");
	};
	increase = () => {num++}; 
	setNum = (value) => {num = value}; 
	setObj = (value1, value2) => {
		obj.key1 = value1;
		obj.key2 = value2;
	};
}

// SetNum up the functions
createNewClosure();

// Print the value of num
print();

// Increase num by 1
increase();
print();

// Use setNum and setObj function
setNum(9);
setObj(9, 10);
print();

var printOldClosure = print;

// ResetNum the global functions by making a new closure
createNewClosure();
print();

// See if old closure still works
printOldClosure();