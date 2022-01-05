const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let total = 1;
  for(let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(base, exponent) {
  return base ** exponent;	
};

const factorial = function(n) {
  if(n===0 || n===1) return 1;
  let total = n;
  do {
    n--;
    total *= n;
  } while(n > 1)
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
