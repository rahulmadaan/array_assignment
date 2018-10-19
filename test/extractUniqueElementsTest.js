let assert = require('assert');
let { extractUniqueElements } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(extractUniqueElements([]),[]);  

// positive numbers
assert.deepEqual(extractUniqueElements([1,2,3]),[1,2,3]);  
assert.deepEqual(extractUniqueElements([1,2,2,3]),[1,2,3]);  
assert.deepEqual(extractUniqueElements([1,2,1,3,2,3,4,3]),[1,2,3,4]);  

// negative numbers
assert.deepEqual(extractUniqueElements([-1,-2]),[-1,-2]);  
assert.deepEqual(extractUniqueElements([-1,-4,-6,-4,-12,-6]),[-1,-4,-6,-12]);  
assert.deepEqual(extractUniqueElements([-5,-23,-45,-23,-50,-54]),[-5,-23,-45,-50,-54]);  
