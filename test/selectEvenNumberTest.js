// test for selecting even numbers

let assert = require('assert');
let lib = require('../lib/select_even_numbers.js').pickEvenNumbers;

assert.deepEqual(lib([]),[]);
assert.deepEqual(lib([2]),[2]);

assert.deepEqual(lib([2,4]),[2,4]);
assert.deepEqual(lib([1,2]),[2]);

assert.deepEqual(lib([1,2,3]),[2]);
assert.deepEqual(lib([3,2,4,7]),[2,4]);
assert.deepEqual(lib([1,2,3,5,8,7]),[2,8]);

// negative numbers
assert.deepEqual(lib([-16,-65,-98,-27]),[-16,-98]);
assert.deepEqual(lib([-662,-092,-9811,-0923]),[-662,-092]);

// large arrays
assert.deepEqual(lib([12,43,66,22]),[12,66,22]);
assert.deepEqual(lib([98,34,56,73,12,35,67,92,13,56,75,23,55,22,64,12,64,14,67,42,64,11,67,11,44,55,66]),[98,34,56,12,92,56,22,64,12,64,14,42,64,44,66]);
assert.deepEqual(lib([45,67,73,44,67,95,24,56,82,62]),[44,24,56,82,62]);
console.log('Test Passed!!!');
