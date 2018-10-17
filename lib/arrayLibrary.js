// for reversing an array
const reverse = function (inputArray) { 
  let outputArray = [];
  for(let index = 0; index < inputArray.length; index ++) {
    outputArray[inputArray.length - index - 1] = inputArray[index];
  }
  return outputArray;
}
exports.reverse=reverse;
