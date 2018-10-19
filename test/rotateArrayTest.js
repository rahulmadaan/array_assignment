let assert = require('assert');
let { rotateArray } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(rotateArray([],),[]);  

// positive numbers
assert.deepEqual(rotateArray([1,2],1),[2,1]);  
assert.deepEqual(rotateArray([1,2,3,4],2),[3,4,1,2]);  

// rotation index exceeding array length
assert.deepEqual(rotateArray([5,8,1,4,6],6),[8,1,4,6,5]);  
assert.deepEqual(rotateArray([5,23,45,71,23,45],10),[23,45,5,23,45,71]);  

// negative numbers
assert.deepEqual(rotateArray([-5,-8,-1,-4,-6],6),[-8,-1,-4,-6,-5]);  
assert.deepEqual(rotateArray([-5,-23,-45,-71,-23,-45],10),[-23,-45,-5,-23,-45,-71]);  

// negative rotation index
assert.deepEqual(rotateArray([1,3,5,7,9],-4),[1,3,5,7,9]);  
assert.deepEqual(rotateArray([10,12,14,16,18,20],-3),[10,12,14,16,18,20]);  
