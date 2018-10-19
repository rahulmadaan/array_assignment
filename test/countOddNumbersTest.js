let assert = require('assert');
let { countingOddNumbers } = require('../lib/arrayLibrary.js');

//no input
assert.equal(countingOddNumbers([]),0);  

assert.equal(countingOddNumbers([1]),1);  
assert.equal(countingOddNumbers([1,2]),1);  

assert.deepEqual(countingOddNumbers([1,2,3]),2);  
assert.deepEqual(countingOddNumbers([1,2,3,4,5]),3);  

