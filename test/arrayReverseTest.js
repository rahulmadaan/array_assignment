// tests for reversing an array
let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let arrayReverse = lib.arrayReverse;

// empty input
//assert.deepEqual(arrayReverse([]),[]);

// one or two elements
assert.deepEqual(arrayReverse([1]),[1]);
assert.deepEqual(arrayReverse([1,2]),[2,1]);

// more than two elements
assert.deepEqual(arrayReverse([1,2,3,4]),[4,3,2,1]);
assert.deepEqual(arrayReverse([1,2,3,4,12,34,556,77]),[77,556,34,12,4,3,2,1]);

assert.deepEqual(arrayReverse([34,55,77,24,73,94,86,336,634,74,373]),[373,74,634,336,86,94,73,24,77,55,34]);
