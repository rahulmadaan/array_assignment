let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let {alternatingElement} = lib;

// no elements
assert(alternatingElement([]),[]);

// one or two  element
assert(alternatingElement([0]),[0]);
assert(alternatingElement([1]),[1]);
assert(alternatingElement([1,2]),[1]);

// more than two elements
assert(alternatingElement([1,2,3]),[1,3]);
assert(alternatingElement([3,5,7,9,0]),[3,7,0]);

assert(alternatingElement([1,1,4,6,9,0,0]),[1,4,9,0]);

// negative number elements
assert(alternatingElement([-6,-13,-2,-9,-1]),[-6,-2,-1]);


