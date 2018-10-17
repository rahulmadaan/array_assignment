let assert = require('assert');
let lib = require('../lib/select_odd_numbers.js').pickOddNumbers;

assert.deepEqual(lib([]),[]);
assert.deepEqual(lib([1]),[1]);

assert.deepEqual(lib([1,3]),[1,3]);
assert.deepEqual(lib([1,2]),[1]);

assert.deepEqual(lib([1,2,3]),[1,3]);
assert.deepEqual(lib([3,2,4,7]),[3,7]);
assert.deepEqual(lib([1,2,3,5,8,7]),[1,3,5,7]);

// negative numbers

assert.deepEqual(lib([-7,-65,-98,-27]),[-7,-65,-27]);
assert.deepEqual(lib([-662,-092,-9811,-0923]),[-9811,-0923]);

// large arrays
assert.deepEqual(lib([12,43,66,22]),[43]);
assert.deepEqual(lib([98,34,56,73,12,35,67,92,13,56,75,23,55,22,64,12,64,14,67,42,64,11,67,11,44,55,66]),[73,35,67,13,75,23,55,67,11,67,11,55]);
assert.deepEqual(lib([45,67,73,44,67,95,24,56,82,62]),[45,67,73,67,95]);
console.log('Test Passed!!!');
