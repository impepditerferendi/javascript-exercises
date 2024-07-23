const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((accumulator, currentValue)=>
    accumulator + currentValue, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((accumulator, currentValue)=>
    accumulator * currentValue, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(n) {
  let sum = 1;
  if(n === 0){
    return 1;
  }

  for(let i = n; i > 0; i--){
    sum *= i;
  }

  return sum;
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
