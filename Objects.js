console.log("-----------------------------------------------------");
console.log("Javascript objects");
console.log("-----------------------------------------------------");

var obj = {"hello" : "kitty"};
var obj1 = Object.create(obj);

console.log("obj: ", obj);
console.log("obj1: ", obj1);

// Only functions have prototypes, the following does not work
// obj1.prototype.hello = "kitty";
// obj.prototype.hello = "kitty";

console.log("obj: ", obj);
console.log("obj1: ", obj1);

console.log(obj1 === obj);
console.log(obj1 == obj);
