const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    var i = 1, value;
    return {
      next() {
        if (i % 3 === 0) {
          value = 'Fizz';
          if (i % 5 === 0) {
            value += 'Buzz';
          }
        } else if (i % 5 === 0) {
          value = 'Buzz';
        } else {
          value = i;
        }
        if (i - 1 == max) {
          return {done: true, value: value};
        }
        i++;
        return {done: false, value: value};
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}

/*
const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        let value = num;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        num++;
        return { done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}

*/