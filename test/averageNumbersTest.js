let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let {averageNumbers} = lib;

// no input
assert.equal(averageNumbers([]),0);  
assert.equal(averageNumbers([1]),1);  
assert.equal(averageNumbers([0]),0);  

assert.equal(averageNumbers([1,2,3]),2);  
assert.equal(averageNumbers([1,2,3,4]),2.5);  

// decimal values
assert.equal(averageNumbers([1.3,2.5,5.6,8.1]),4.375);
assert.equal(averageNumbers([1.4,5.2,8.4]),5);
