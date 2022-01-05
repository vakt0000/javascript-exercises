const caesar = function(str, shift) {
  shift = shift%26; // we assume the English alphabet
  if (shift === 0) return str;

  let strCaesar = "";
  for(let i = 0; i < str.length; i++) {
    asciiCode = str.charCodeAt(i);
    if(asciiCode>=97 && asciiCode <= 122) {
      if(asciiCode + shift < 97) strCaesar += String.fromCharCode(122 + shift -96 +asciiCode);
      else if (asciiCode + shift > 122) strCaesar += String.fromCharCode(96 + shift + asciiCode - 122);
      else strCaesar += String.fromCharCode(asciiCode + shift);
    }
    else if (asciiCode >= 65 && asciiCode <= 90){
      if(asciiCode + shift < 65) strCaesar += String.fromCharCode(90 + shift -64 +asciiCode);
      else if (asciiCode + shift > 90) strCaesar += String.fromCharCode(64 + shift + asciiCode - 90);
      else strCaesar += String.fromCharCode(asciiCode + shift);
    }
    else strCaesar += str.charAt(i);
  }
  return strCaesar;
};

// Do not edit below this line
module.exports = caesar;
