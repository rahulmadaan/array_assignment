let assert = require('assert');
let { arrayIntersection } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(arrayIntersection([],[]),[]);  

// unique elements
assert.deepEqual(arrayIntersection([1,2,3],[4,5]),[]);  
assert.deepEqual(arrayIntersection([5,7,9],[8,14,19,21,33]),[]);  

// positive numbers
assert.deepEqual(arrayIntersection([1,2],[1]),[1]);  
assert.deepEqual(arrayIntersection([2,3,4,6,8],[1,3,5,7,8]),[3,8]);  

// negative numbers
assert.deepEqual(arrayIntersection([-1,-2,-3],[-1,-2]),[-1,-2]);  
assert.deepEqual(arrayIntersection([-2,-3,-4,-6,-8],[-1,-3,-5,-7,-8]),[-3,-8]);  
