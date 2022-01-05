const findTheOldest = function(people) {
  let maxDiff = 0;
  let index = 0;
  for(let i = 0; i < people.length; i++) {
    if(typeof(people[i].yearOfDeath) === "undefined" ) {
      finalYear = new Date().getFullYear();
    }
    else {
      finalYear = people[i].yearOfDeath;
    }
    initialYear = people[i].yearOfBirth;
    if (finalYear - initialYear > maxDiff) {
      maxDiff = finalYear -initialYear;
      index = i;
    }
  }
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
