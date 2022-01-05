// This could be implemented using Gauss approach but for the sake of practicing, let's do it with loops.
const sumAll = function(a, b) {
  if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
  else if (a<0 || b<0) return "ERROR";

  let max = a;
  let sum = b;
  if(a<b) {
    max = b;
    sum = a;
  }
  for(let i = sum+1; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
