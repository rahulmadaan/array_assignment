let assert = require('assert');
let { zipArray } = require('../lib/arrayLibrary.js');

// no input
assert.deepEqual(zipArray([],[]),[]);  

// positive numbers
assert.deepEqual(zipArray([1,2],[4,5]),[[1,4],[2,5]]); 
assert.deepEqual(zipArray([4,6,8],[3,7]),[[4,3],[6,7]]); 

// negative numbers
assert.deepEqual(zipArray([-4,-7],[-6]),[[-4,-6]]); 
assert.deepEqual(zipArray([-5,-8,-10,-32],[-21,-34]),[[-5,-21],[-8,-34]]); 
