let assert = require('assert');
let { extractDigitsFromNumber } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(extractDigitsFromNumber(),[]);  

// positive numbers
assert.deepEqual(extractDigitsFromNumber(12),[1,2]);  
assert.deepEqual(extractDigitsFromNumber(1234),[1,2,3,4]);  
assert.deepEqual(extractDigitsFromNumber(123456),[1,2,3,4,5,6]);  

// negative numbers
assert.deepEqual(extractDigitsFromNumber(-12),[1,2]);  
assert.deepEqual(extractDigitsFromNumber(-1736),[1,7,3,6]);  
assert.deepEqual(extractDigitsFromNumber(-9876),[9,8,7,6]);  
