let assert = require('assert');
let sumNumbers = require('../lib/sum_all_numbers.js').sumNumbers;
let add = require('../lib/sum_all_numbers.js').add;

assert.equal(sumNumbers([1]),1);
assert.equal(sumNumbers([1,1]),2);
assert.equal(sumNumbers([1,0]),1);

assert.equal(sumNumbers([1,9]),10);
assert.equal(sumNumbers([1,14]),15);
assert.equal(sumNumbers([59,23,87]),169);

// large input array
assert.equal(sumNumbers([2,5,7,8,3,1]),26);
assert.equal(sumNumbers([2,65,29,53,75,53,13,46,75,24]),435);

// negative values
assert.equal(sumNumbers([-2,-4]),-6);
assert.equal(sumNumbers([-12,-14,-13]),-39);
assert.equal(sumNumbers([-39,-15,-65]),-119);


assert.equal(sumNumbers([59,23,87]),169);
console.log('Test Passed!!!');
