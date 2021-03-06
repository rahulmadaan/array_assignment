let subLibrary = require('./subArrayLibrary.js');
let {compliment}=subLibrary;
let {unique}=subLibrary;
let {lowest}=subLibrary;
let {mapLength}=subLibrary;
let {greatest}=subLibrary;
let {reverse}=subLibrary;
let {partitionArray}=subLibrary;
let {alternatingElements}=subLibrary;
let {countAboveThresholdGenerator}=subLibrary;
let {generateFib} = subLibrary;
let {removeDuplicates} = subLibrary;

const arrayReverse = function(inputArray) {
  return inputArray.reduce(reverse,[]);
}

// Picks the odd numbers from the input Array (numbersCollection) and returns them in a different array (oddNumbers).

const pickOddNumbers= function (number) {
  output = number.filter(isOdd);
  return output;
}

const isOdd = function (number) {
  return number % 2 != 0;
}

// To find the sum of numbers from an array and returns their sum

const add = function (number1 , number2) {
  return number1 + number2;
}

const sumNumbers = function (numbersList) { 
  let output = numbersList.reduce(add);
  return output;
}

// Picks the even numbers from the input Array (numbersCollection) and returns them in a different array (evenNumbers).

const pickEvenNumbers= function (number) {
  output = number.filter(isEven);
  return output;
}

const isEven = function (number) {
  return number % 2 == 0;
}

// Selecting every second element

const alternatingElement = function (inputNumbers) { 
  return inputNumbers.reduce(alternatingElements,{index:0,array:[]}).array;
}

// Reverse Fibonacci
const reverseFibonicci = function (length) { 
  if(length < 0) return [];
  let list = new Array(length).fill(0);
  let series = list.reduce(generateFib, {index:0, fibSeries: [], term_1:0, term_2:1 });
  return series.fibSeries.reverse();
}

// Greatest Number in Array
const greatestNumber = function (inputArray) { 
  output = inputArray.reduce(greatest);
  return output;
}

// Lowest number in an Array
const lowestNumber = function (inputArray) { 
  output = inputArray.reduce(lowest);
  return output;
}

//Average of a list
const averageNumbers = function (inputArray) { 
  let sumAllNumbers = sumNumbers(inputArray);
  return sumAllNumbers/inputArray.length;
}

// mapping lengths
const mappingLengths = function (inputArray) { 
  return inputArray.map(mapLength,[]);
}

// counting Odd Numbers 

const countingOddNumbers = function (inputArray) { 
  return inputArray.filter(isOdd).length;
}

// Counting even numbers

const countingEvenNumbers = function (inputArray) { 
  return inputArray.filter(isEven).length;
}

//numbers above a certain threshold in an array

const countAboveThreshold = function (inputArray,threshold) { 
  aboveThreshold = countAboveThresholdGenerator(threshold);
  return inputArray.reduce(aboveThreshold,[]).length;
}

// numbers below a certain threshold in an array
const countBelowThreshold = function (inputArray,threshold) { 
  threshold = partitionArray(threshold);
  return inputArray.reduce(threshold,[[],[]])[0].length; 
}

// Reversing an Array
const reverseArray = function (inputArray) { 
  return inputArray.reduce(reverse,[]);
}

// find Index Of a Number
const getIndex = function (inputArray,number) { 
    return inputArray.indexOf(number);
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
  return inputArray.reduce(unique,[]);
}

// Array Union with unique elements
const arrayUnion = function (inputArray1, inputArray2) { 
  return removeDuplicates(inputArray1.concat(inputArray2)); 
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

// is subset
const isSubset = function (inputArray,subset) { 
  let isSubset = true;
  for(value of subset) {
    if(!inputArray.includes(value)) {
      isSubset = false;
    }
  }
  return isSubset;
}

// zipping two arrays
const zipArray = function (inputArray1, inputArray2) { 
  let zippedArray = [];
  let arrayForZipping = [];
  for (let index in inputArray2) {
    arrayForZipping = [inputArray1[index],inputArray2[index]];
    zippedArray.push(arrayForZipping);
  }
  return zippedArray;
}

// Rotate Array
const rotateArray = function (inputArray,position) { 
  let rotatedArray = inputArray;
  for(let count=0; count<position; count++) {
    rotatedArray.push(inputArray[0]);
    rotatedArray.shift();
  }

  return rotatedArray;
}

// partitioned array 
const partitionedArray = function (inputArray,thresholdLimit) { 
  threshold = partitionArray(thresholdLimit);
  return inputArray.reduce(threshold,[[],[]]); 
}

module.exports={
  reverse,
  arrayReverse,
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
  arrayDifference,
  isSubset,
  zipArray,
  rotateArray,
  partitionedArray
};

