// Picks the odd numbers from the input Array (numbersCollection) and returns them in a different array (oddNumbers).

const pickOddNumbers= function (numbersCollection) {
  oddNumbers=[];
  for(value of numbersCollection) {
    if(isOdd(value)) {
      oddNumbers.push(value);
    }
  }
  return oddNumbers;
}

const isOdd = function (number) {
  return number % 2 == 0;
}

exports.pickOddNumbers=pickOddNumbers;
exports.isOdd=isOdd;
