const compliment = function (func) {
  return function(argv) {
    return !func(argv) 
  }
}
const unique = function(inputArray,element) {
  if(!inputArray.includes(element)) inputArray.push(element);
  return inputArray;
}

const lowest = function(number1,number2) {
  if(number1 < number2) {
    return number1;
  }
  return number2;
}
const mapLength = function(string) {
  return string.length;
}

const greatest = function(number1,number2) {
  if(number1 > number2) {
    return number1;
  }
  return number2;
}

const reverse = function (number1,number2) { 
  return [number2].concat(number1);
}

const partitionArray = function(thresholdLimit){
  return function(result,element){
    if(element<thresholdLimit) result[0].push(element);   
    else { result[1].push(element); }
    return result;
  }
}
const countAboveThresholdGenerator = function(thresholdLimit){
  return function(result,element){
    if(element>thresholdLimit) result.push(element);   
    return result;
  }
}

const alternatingElements = function(initial,number) {
  if(initial.index %2 ==0) {initial.array.push(number)}
  initial.index++;
  return initial;
}


module.exports={
  compliment,
  unique,
  lowest,
  mapLength,
  greatest,
  reverse,
  partitionArray,
  alternatingElements,
  countAboveThresholdGenerator
};
