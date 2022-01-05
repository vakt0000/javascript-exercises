const leapYears = function(year) {
  if(year%4===0) {
    year = year/4;
    if(year%100===0) return true;
    else if(year%25===0) return false;
    else return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
