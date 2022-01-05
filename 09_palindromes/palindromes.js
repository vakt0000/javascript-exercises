const palindromes = function (str) {
  str = str.toLowerCase();
  let strAux = "";
  for(let i = 0; i < str.length; i++) {
    if(checkCharsInStr(str.charAt(i))) strAux += str.charAt(i);
  }
  if(strAux === reverseString(strAux)) return true;
  else return false;
};

function checkCharsInStr(str) {
  if(str.includes('.')) return false;
  else if(str.includes('!')) return false;
  else if(str.includes(',')) return false;
  else if(str.includes(' ')) return false;
  else return true;
}

function reverseString(str) {
  let strToReturn = "";
  for(let i = str.length-1; i >= 0; i--) {
    strToReturn += str.charAt(i);
  }
  return strToReturn;
};
// Do not edit below this line
module.exports = palindromes;
