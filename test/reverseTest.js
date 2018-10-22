// tests for reversing an array
let assert = require('assert');
let lib = require('../lib/arrayLibrary.js');
let reverse = lib.reverse;

// one or two elements
assert.deepEqual(reverse(1,2),[2,1]);

assert.deepEqual(reverse(-556,-77),[-77,-556]);

assert.deepEqual(reverse(74,373),[373,74]);
