const findTheOldest = function(people) {
  return people.reduce((oldestPerson, nextPerson) => {
    let ageOldest = (!oldestPerson.yearOfDeath) ? (new Date().getFullYear() - oldestPerson.yearOfBirth) : (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth);
    let ageNext = (!oldestPerson.yearOfDeath) ? (new Date().getFullYear() - nextPerson.yearOfBirth) : (nextPerson.yearOfDeath - nextPerson.yearOfBirth);
    return (ageOldest > ageNext) ? oldestPerson : nextPerson;
  })
};

// Do not edit below this line
//module.exports = findTheOldest;