function greeter(person: string) {
	return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);

// This will give an error
// document.body.innerHTML = greeter([user]);