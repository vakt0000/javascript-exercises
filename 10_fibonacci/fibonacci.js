const fibonacci = function(n) {
  if(n<=0) return "OOPS";
  if(n<3) return 1;
  else {
    let last_item = 2;
    let precedent_item = 1;
    while(n > 3) {
      last_item += precedent_item;
      precedent_item = last_item-precedent_item;
      n--;
    }
    return last_item;
  }
}

// Do not edit below this line
module.exports = fibonacci;
