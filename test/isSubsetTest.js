let assert = require('assert');
let { isSubset } = require('../lib/arrayLibrary.js');

// no input
assert.equal(isSubset([],[]),true);  

// positive numbers
assert.equal(isSubset([1,2],[1]),true);  
assert.equal(isSubset([1,2,3,4],[1,3]),true);  
assert.equal(isSubset([1,2,3],[1,2,4]),false);  

// negative numbers
assert.equal(isSubset([-1,-2],[-1]),true);  
assert.equal(isSubset([-1,-2,-3,-4],[-1,-3]),true);  
assert.equal(isSubset([-1,-2,-3],[-1,-2,-4]),false);  
