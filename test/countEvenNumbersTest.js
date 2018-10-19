let assert = require('assert');
let { countingEvenNumbers } = require('../lib/arrayLibrary.js');

//no input
assert.equal(countingEvenNumbers([]),0);  

assert.equal(countingEvenNumbers([2]),1);  
assert.equal(countingEvenNumbers([1,2]),1);  

assert.deepEqual(countingEvenNumbers([1,2,4]),2);  
assert.deepEqual(countingEvenNumbers([1,2,3,4,8]),3);  

assert.deepEqual(countingEvenNumbers([12,43,56,86,25]),3);  
assert.deepEqual(countingEvenNumbers([16,76,23,62,34]),4);  
assert.deepEqual(countingEvenNumbers([164,36,3346,3463,6436]),4);
