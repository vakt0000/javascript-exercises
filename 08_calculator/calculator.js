const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.length ? array.reduce((total, num) => total + num) : 0;
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num);
};

const power = function(base, exponent) {
  return base ** exponent;	
};

const factorial = function(n) {
  total = 1;
  while(n > 1) {
    total *= n;
    n--;
  }
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
