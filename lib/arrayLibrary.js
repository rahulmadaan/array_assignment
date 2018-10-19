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

// mapping lengths
const mappingLengths = function (inputArray) { 
  let outputArray = [];

  for(index=0; index <inputArray.length; index++) {
    outputArray.push((inputArray[index]).length)
  }
  return outputArray;
}

// counting Odd Numbers 

const countingOddNumbers = function (inputArray) { 
  let oddCount = 0;
  for(index of inputArray) {
    if(isOdd(inputArray[index])) {
      oddCount ++;
    }
  }
  return oddCount;
}

// Counting even numbers

const countingEvenNumbers = function (inputArray) { 
  let evenCount = 0;
  for(value of inputArray) {
    if(isEven(value)) {
      evenCount ++;
    }
  }
  return evenCount;
}

//numbers above a certain threshold in an array

const countAboveThreshold = function (inputArray,threshold) { 
  let thresholdCount = 0;
  for(value of inputArray) {
    if(value > threshold) {
      thresholdCount++;
    }
  }
  return thresholdCount;
}

// numbers below a certain threshold in an array

const countBelowThreshold = function (inputArray,threshold) { 
  let thresholdCount = 0;
  for(value of inputArray) {
    if(value < threshold) {
      thresholdCount++;
    }
  }
  return thresholdCount;
}

// Reversing an Array
const reverseArray = function (inputArray) { 
  let outputArray = [];
  for(let index = 0; index < inputArray.length; index ++) {
    outputArray[inputArray.length - index - 1] = inputArray[index];
  }
  return outputArray;
}

// find Index Of a Number

const getIndex = function (inputArray,number) { 
  let numberIndex = -1;
  for(let index=0; index<inputArray.length; index++) {
    if(inputArray[index] == number) {
      numberIndex = index;
      index = inputArray.length;
    }
  }
  return numberIndex;
}

// Ascending order

const isAscending = function (inputArray) { 
  let isAscending = true;
  for(let index=0; index<inputArray.length-1; index++ ) {
    if(inputArray[index] > inputArray[index + 1]) {
      isAscending = false;
    }
  }
  return isAscending;
}

// Decending order

const isDecending = function (inputArray) { 
  let isDecending = true;
  for(let index=0; index<inputArray.length-1; index++ ) {
    if(inputArray[index] < inputArray[index + 1]) {
      isDecending = false;
    }
  }
  return isDecending;
}

// Extract digits from number and return in array

const extractDigitsFromNumber = function (number) { 
  let inputNumber = Math.abs(number);
  let arrayWithDigits = [];
  while (inputNumber > 0) {
    arrayWithDigits.unshift(inputNumber % 10 );
    inputNumber = Math.floor(inputNumber / 10);    
  }
  return arrayWithDigits;
}

// Unique elements from an array

const extractUniqueElements = function (inputArray) { 
  let uniqueElements = [];
  for(value of inputArray) {
    if(!uniqueElements.includes(value)) {
      uniqueElements.push(value);
    }
  }
  return uniqueElements;
}

// Array Union with unique elements

const arrayUnion = function (inputArray1, inputArray2) { 
  let unionArray = [];
  for(value of inputArray1 ) {
    if(!unionArray.includes(value)) {
      unionArray.push(value);
    }
  }
  for(value of inputArray2 ) {
    if(!unionArray.includes(value)) {
      unionArray.push(value);
    }
  }
  return unionArray;
}

// Intersection of two arrays with unique elements in both 

const arrayIntersection = function (inputArray1, inputArray2) { 
  let intersectionArray = [];
  for(value of inputArray1 ) {
    if(inputArray2.includes(value)) {
      intersectionArray.push(value);
    }
  }
  return intersectionArray;
}

// difference of two arrays
const arrayDifference = function (inputArray1, inputArray2) { 
  let differenceArray = [];
  for(value of inputArray1 ) {
    if(!inputArray2.includes(value) && !differenceArray.includes(value)) {
      differenceArray.push(value);
    }
  }
  return differenceArray;
}

module.exports={
  reverse,
  add,
  alternatingElement,
  pickEvenNumbers,
  pickOddNumbers,
  isEven,
  isOdd,
  sumNumbers,
  reverseFibonicci,
  greatestNumber,
  lowestNumber,
  averageNumbers,
  mappingLengths,
  countingOddNumbers,
  countingEvenNumbers,
  countAboveThreshold,
  countBelowThreshold,
  reverseArray,
  getIndex,
  isAscending,
  isDecending,
  extractDigitsFromNumber,
  extractUniqueElements,
  arrayUnion,
  arrayIntersection,
  arrayDifference
};

