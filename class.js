class Parent {
	constructor(name) {
		this.name = name
	}

	foo() {
		console.log(this)
	}
}

var obj = new Parent('Sid')
obj.foo()

var fn = obj.foo
fn()

var boundFn = obj.foo.bind(obj)
boundFn()

console.log(typeof Parent)