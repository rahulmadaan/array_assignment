let assert = require('assert');
let lib = require('../lib/arrayLibrary.js').alternatingElement;

// no elements
assert(lib([]),[]);

// one or two  element
assert(lib([0]),[0]);
assert(lib([1]),[1]);
assert(lib([1,2]),[1]);

// more than two elements
assert(lib([1,2,3]),[1,3]);
assert(lib([3,5,7,9,0]),[3,7,0]);

assert(lib([1,1,4,6,9,0,0]),[1,4,9,0]);

// negative number elements
assert(lib([-6,-13,-2,-9,-1]),[-6,-2,-1]);


