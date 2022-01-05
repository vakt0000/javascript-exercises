const reverseString = function(str) {
  let strToReturn = "";
  for(let i = str.length-1; i >= 0; i--) {
    strToReturn += str.charAt(i);
  }
  return strToReturn;
};

// Do not edit below this line
module.exports = reverseString;
