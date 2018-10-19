let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let {lowestNumber} = lib;

// no input
assert.equal(lowestNumber([]),undefined);  

// numbers in ascending order
assert.equal(lowestNumber([1]),1);
assert.equal(lowestNumber([1,2]),1);
assert.equal(lowestNumber([1,2,3,4]),1);

// shuffled numbers
assert.equal(lowestNumber([2,4,3,1]),1);
assert.equal(lowestNumber([12,43,55,1,8]),1);
assert.equal(lowestNumber([6,56,3,45,9]),3);

// Negative numbers
assert.equal(lowestNumber([-1,-2,-3,-4]),-4);
assert.equal(lowestNumber([-2,0,-3,-4]),-4);


