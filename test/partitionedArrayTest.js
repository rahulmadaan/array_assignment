let assert = require('assert');
let { partitionedArray } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(partitionedArray([],),[ [] , [] ]);  

// positive numbers
assert.deepEqual(partitionedArray([1,2,3],2),[ [1] , [2,3] ]);  
assert.deepEqual(partitionedArray([2,4,6,8,10],5),[ [2,4] , [6,8,10] ]);  
assert.deepEqual(partitionedArray([4,5,6,10,13,17],10),[ [4,5,6] , [10,13,17] ]);  

// negative numbers
assert.deepEqual(partitionedArray([-1,-2,-3],2),[ [-1,-2,-3] , [] ]);  
assert.deepEqual(partitionedArray([-2,-4,-6,-8,-10],5),[ [-2,-4,-6,-8,-10] , [] ]);  
assert.deepEqual(partitionedArray([-4,-5,-6,-10,-13,-17],10),[ [-4,-5,-6,-10,-13,-17] , [] ]);  
