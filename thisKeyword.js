// This in a function refers to the object instance on which the method is currently being called.

var obj = {};

function fun() {
    this.cnt = 1;
    function fun3() {
        console.log("At fun3: ");
        console.log(this);
        return this;
    }
    fun3.call(obj);
    fun3();
    return this;
}

var fun1 = new fun();
var fun2 = fun();

console.log("fun1.cnt", fun1.cnt);
console.log("fun2.cnt", fun2.cnt);
console.log(fun1 === fun2);

console.log(fun1);
console.log(fun2);