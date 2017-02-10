"use strict";

var name = "Global";

var person = {
	"name" : "Sid",
	"hello" : function() {
		console.log("Hello " + this.name);
		console.log(arguments);
	}
};

var animal = {
	"name" : "Cat"
};

// Default Call
person.hello();

// Call with respect to global data
person.hello.call(this);

var arr = [1, 2, 3];

// Now, change the context to animal
// Call sends the entire array as a single object
person.hello.call(animal, arr);

// Permanently bind helloCat to animal
var helloCat = person.hello.bind(animal);
helloCat();

// Apply passes arguments as individual elements
person.hello.apply(person, arr);