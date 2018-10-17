// test for sum of all numbers
let assert = require('assert');
lib = require('../lib/arrayLibrary.js');
let sumNumbers = lib.sumNumbers;

assert.equal(sumNumbers([1]),1);
assert.equal(sumNumbers([1,1]),2);
assert.equal(sumNumbers([1,0]),1);

assert.equal(sumNumbers([1,9]),10);
assert.equal(sumNumbers([1,14]),15);

assert.equal(sumNumbers([59,23,87]),169);
assert.equal(sumNumbers([59,23,87]),169);

// large input array
assert.equal(sumNumbers([2,5,7,8,3,1]),26);
assert.equal(sumNumbers([2,65,29,53,75,53,13,46,75,24]),435);

// negative values
assert.equal(sumNumbers([-2,-4]),-6);
assert.equal(sumNumbers([-12,-14,-13]),-39);

