let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let {greatestNumber} = lib;

// no input
assert.equal(greatestNumber([]),undefined);  

// numbers in ascending order
assert.equal(greatestNumber([1]),1);
assert.equal(greatestNumber([1,2]),2);
assert.equal(greatestNumber([1,2,3,4]),4);

// shuffled numbers
assert.equal(greatestNumber([2,4,3,1]),4);
assert.equal(greatestNumber([12,43,55,1,8]),55);
assert.equal(greatestNumber([6,56,3,45,9]),56);

// Negative numbers
assert.equal(greatestNumber([-1,-2,-3,-4]),-1);
assert.equal(greatestNumber([-2,0,-3,-4]),0);


