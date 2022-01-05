const repeatString = function(str, n) {
  let strToReturn = "";
  if(n < 0) {
    return "ERROR";
  }
  for(let i = 0; i < n; i++) {
        strToReturn += str;
  }
  return strToReturn;
};

// Do not edit below this line
module.exports = repeatString;
