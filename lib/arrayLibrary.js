// for reversing an array
const reverse = function (inputArray) { 
  let outputArray = [];
  for(let index = 0; index < inputArray.length; index ++) {
    outputArray[inputArray.length - index - 1] = inputArray[index];
  }
  return outputArray;
}

// Picks the odd numbers from the input Array (numbersCollection) and returns them in a different array (oddNumbers).
const pickOddNumbers= function (numbersCollection) {
  oddNumbers=[];
  for(number of numbersCollection) {
    if(isOdd(number)) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

const isOdd = function (number) {
  return number % 2 != 0;
}


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

// Picks the even numbers from the input Array (numbersCollection) and returns them in a different array (evenNumbers).

const pickEvenNumbers= function (numbersCollection) {
  evenNumbers=[];
  for(value of numbersCollection) {
    if(isEven(value)) {
      evenNumbers.push(value);
    }
  }
  return evenNumbers;
}

const isEven = function (number) {
  return number % 2 == 0;
}

exports.pickEvenNumbers=pickEvenNumbers;
exports.isEven=isEven;
exports.add=add;
exports.sumNumbers=sumNumbers;
exports.pickOddNumbers=pickOddNumbers;
exports.isOdd=isOdd;
exports.reverse=reverse;
