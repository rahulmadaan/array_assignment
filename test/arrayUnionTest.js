let assert = require('assert');
let { arrayUnion } = require('../lib/arrayLibrary.js');

//no input
assert.deepEqual(arrayUnion([],[]),[]);  

// unique elements
assert.deepEqual(arrayUnion([1,2],[3,4]),[1,2,3,4]);  
assert.deepEqual(arrayUnion([12,45],[36,61]),[12,45,36,61]);  

// positive numbers
assert.deepEqual(arrayUnion([1,2],[2,4]),[1,2,4]);  
assert.deepEqual(arrayUnion([5,7,4,1,5,8],[3,5,7,1,2,9,14]),[5,7,4,1,8,3,2,9,14]);  

// negative numbers
assert.deepEqual(arrayUnion([-1,-2],[-2,-4]),[-1,-2,-4]);  
assert.deepEqual(arrayUnion([-5,-7,-4,-1,-5,-8],[-3,-5,-7,-1,-2,-9,-14]),[-5,-7,-4,-1,-8,-3,-2,-9,-14]);  
