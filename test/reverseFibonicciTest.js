let {reverseFibonicci} = require('../lib/arrayLibrary.js');
let assert = require('assert');

// no or one value 
assert.deepEqual(reverseFibonicci(),[0]);
assert.deepEqual(reverseFibonicci(1),[0]);

// more than two values
assert.deepEqual(reverseFibonicci(2),[1,0]);
assert.deepEqual(reverseFibonicci(3),[1,1,0]);
assert.deepEqual(reverseFibonicci(4),[2,1,1,0]);

// negative values
assert.deepEqual(reverseFibonicci(-1),[0]);
assert.deepEqual(reverseFibonicci(-4),[0]);

// large values
assert.deepEqual(reverseFibonicci(10),[34,21,13,8,5,3,2,1,1,0]);
assert.deepEqual(reverseFibonicci(12),[89,55,34,21,13,8,5,3,2,1,1,0]);
