let assert = require('assert');
let { arrayDifference } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(arrayDifference([],[]),[]);  

// positive numbers
assert.deepEqual(arrayDifference([1],[1]),[]);  
assert.deepEqual(arrayDifference([1],[2]),[1]);  
assert.deepEqual(arrayDifference([1,2,3],[2,4,6]),[1,3]);

// large arrays
assert.deepEqual(arrayDifference([10,12,43,25,77],[15,12,36,43,55,71]),[10,25,77]);
assert.deepEqual(arrayDifference([23,78,26,51,47,26,20],[23,54,12,54,51,76,43,23]),[78,26,47,20]);


// negative numbers
assert.deepEqual(arrayDifference([-10,-12,-43,-25,-77],[-15,-12,-36,-43,-55,-71]),[-10,-25,-77]);
assert.deepEqual(arrayDifference([-23,-78,-26,-51,-47,-26,-20],[-23,-54,-12,-54,-51,-76,-43,-23]),[-78,-26,-47,-20]);
