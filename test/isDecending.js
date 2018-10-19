let assert = require('assert');
let { isDecending } = require('../lib/arrayLibrary.js');

//no input
assert.equal(isDecending([]),true);  
assert.equal(isDecending([1]),true);  

assert.equal(isDecending([2,1]),true);  
assert.equal(isDecending([4,2,3,1]),false);  
assert.equal(isDecending([4,3,2,1]),true);  

assert.equal(isDecending([54,43,32,12,6]),true);  
assert.equal(isDecending([432,234,158,93,73,63,33,55,22]),false);  
assert.equal(isDecending([88.4,73.3,52.3,37.7,28.1,11.2]),true);
