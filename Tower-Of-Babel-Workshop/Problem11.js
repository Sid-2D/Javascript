var inputs = process.argv.slice(2);
var result = inputs.map((ele) => (ele[0].toUpperCase()))
                   .reduce(((prev, cur) => (prev += cur)), '');
console.log(result);
/*
var inputs = process.argv.slice(2);
var result = inputs.map((x) => x[0]).reduce((result, x) => result += x);
console.log(result);
*/