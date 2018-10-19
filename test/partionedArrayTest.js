let assert = require('assert');
let { partionedArray } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(partionedArray([],),[ [] , [] ]);  

// positive numbers
assert.deepEqual(partionedArray([1,2,3],2),[ [1,2] , [3] ]);  
assert.deepEqual(partionedArray([2,4,6,8,10],5),[ [2,4] , [6,8,10] ]);  
assert.deepEqual(partionedArray([4,5,6,10,13,17],10),[ [4,5,6,10] , [13,17] ]);  

// negative numbers
assert.deepEqual(partionedArray([-1,-2,-3],2),[ [-1,-2,-3] , [] ]);  
assert.deepEqual(partionedArray([-2,-4,-6,-8,-10],5),[ [-2,-4,-6,-8,-10] , [] ]);  
assert.deepEqual(partionedArray([-4,-5,-6,-10,-13,-17],10),[ [-4,-5,-6,-10,-13,-17] , [] ]);  
