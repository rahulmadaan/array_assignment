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

// Selecting every second element

const alternatingElement = function (inputNumbers) { 
  let outputArray = [];
  for(let index = 0; index<inputNumbers.length; index+=2) {
    outputArray.push(inputNumbers[index]);
  }
  return outputArray;
}

// Reverse Fibonacci

const reverseFibonicci = function (length) { 

  let number1 = 0;
  let number2 = 1;
  let nextNumber = 0;
  let outputArray = [];
  outputArray.push(0);
  let count = 1;
  while (count < length) {
    number1 = number2;
    number2 = nextNumber;
    nextNumber = number1 + number2;
    outputArray.unshift(nextNumber);
    count ++;
  }
  return outputArray;
}

// Greatest Number in Array

const greatestNumber = function (inputArray) { 

  let greatestNumber = '';
  greatestNumber = inputArray[0];
  for(value of inputArray) {
    if(greatestNumber < value) {
      greatestNumber = value;
    }
  }
  return greatestNumber;
}

// Lowest number in an Array
const lowestNumber = function (inputArray) { 

  let lowestNumber = '';
  lowestNumber = inputArray[0];
  for(value of inputArray) {
    if(lowestNumber > value) {
      lowestNumber = value;
    }
  }
  return lowestNumber;
}

//Average of a list
const averageNumbers = function (inputArray) { 

  let averageOfNumbers = 0;
  let sumNumbers = 0;
  let count = 0;
  if(inputArray.length > 0) {
    for(value of inputArray) {
      sumNumbers = sumNumbers + value;
      count ++;
    }
    averageOfNumbers = sumNumbers / count;
  }
  return averageOfNumbers;
}


module.exports={reverse,add,alternatingElement,pickEvenNumbers,pickOddNumbers,isEven,isOdd,sumNumbers,reverseFibonicci,greatestNumber,lowestNumber,averageNumbers}
