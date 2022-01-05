const ftoc = function(fahreneheit) {
  return Math.round((fahreneheit-32)*10*5/9)/10;
};

const ctof = function(celsius) {
  return Math.round(celsius*9/5*10)/10+32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
