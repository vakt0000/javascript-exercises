const removeFromArray = function(array, ...theArgs) {
  let arrayElements = Array.from(theArgs);
  for(let k=0; k<arrayElements.length; k++) {
    let offset = 0;
    for(let i=0; i<array.length; i++) {
      if(array[i]===arrayElements[k]) {
        array.splice(i+offset, 1);
        offset--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
