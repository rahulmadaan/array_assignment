// To find the sum of numbers from an array and returns their sum

const add = function (number1 , number2) {
  return number1 + number2;
}

const sumNumbers = function (numbersList) { 
  let sum = 0;
  for(key of numbersList) {
    sum = add(key, sum);
  }
  return sum;
}

exports.add=add;
exports.sumNumbers=sumNumbers;
