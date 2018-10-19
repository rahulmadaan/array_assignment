let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let {mappingLengths} = lib;

assert.deepEqual(mappingLengths(['a']),[1]);  
assert.deepEqual(mappingLengths(['abcde']),[5]);  

// multiple strings
assert.deepEqual(mappingLengths(['qwerty','qwer']),[6,4]);  
assert.deepEqual(mappingLengths(['asdfghj','asdfg']),[7,5]);  
assert.deepEqual(mappingLengths(['r','ready','not','sum','yes']),[1,5,3,3,3]);  
