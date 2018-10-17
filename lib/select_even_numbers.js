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
