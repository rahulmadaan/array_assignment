let assert = require('assert');
let pickOddNumbers = require('../lib/arrayLibrary.js').pickOddNumbers;

// no elements
assert.deepEqual(pickOddNumbers([]),[]);

// one or two elements
assert.deepEqual(pickOddNumbers([1]),[1]);
assert.deepEqual(pickOddNumbers([1,3]),[1,3]);

assert.deepEqual(pickOddNumbers([1,2]),[1]);
assert.deepEqual(pickOddNumbers([1,2,3]),[1,3]);

// two or more elements
assert.deepEqual(pickOddNumbers([1,2,3]),[1,3]);
assert.deepEqual(pickOddNumbers([3,2,4,7]),[3,7]);

assert.deepEqual(pickOddNumbers([1,2,3,5,8,7]),[1,3,5,7]);

// negative numbers
assert.deepEqual(pickOddNumbers([-7,-65,-98,-27]),[-7,-65,-27]);
assert.deepEqual(pickOddNumbers([-662,-092,-9811,-0923]),[-9811,-0923]);
