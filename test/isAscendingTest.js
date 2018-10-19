let assert = require('assert');
let { isAscending } = require('../lib/arrayLibrary.js');

//no input
assert.equal(isAscending([]),true);  
assert.equal(isAscending([1]),true);  

assert.equal(isAscending([1,2]),true);  
assert.equal(isAscending([1,2,4,3]),false);  
assert.equal(isAscending([1,2,3,4]),true);  

assert.equal(isAscending([4,7,10,14,16]),true);  
assert.equal(isAscending([12,34,67,46,89,155]),false);  
assert.equal(isAscending([10.3,26.8,37.1,47.7,53.8,87.2]),true);
