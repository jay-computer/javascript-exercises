const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numList) {
  let tot = 0;
	for(num of numList) {
    tot = tot + num;
  }
  return tot;
};

const multiply = function(numList) {
  let tot = 1;
	for(num of numList) {
    tot = tot * num;
  }
  return tot;
};

const power = function(base, expo) {
	return Math.pow(base, expo);
};

const factorial = function(base) {
	if(base === 0 || base ===1) {
    return 1;
  }

  let tot = 1;
  for (let i = base; i > 0; i = i - 1) {
    tot = tot * i;
  }
  return tot;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
