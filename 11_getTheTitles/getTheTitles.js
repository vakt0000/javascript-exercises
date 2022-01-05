const getTheTitles = function(array) {
  for(let i = 0; i < array.length; i++) {
    array.splice(i, 1, array[i].title);
  }
  return array;
};

// Do not edit below this line
module.exports = getTheTitles;
