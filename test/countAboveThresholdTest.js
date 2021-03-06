let assert = require('assert');
let { countAboveThreshold } = require('../lib/arrayLibrary.js');

//no input
assert.equal(countAboveThreshold([],1),0);  

assert.equal(countAboveThreshold([1,3],2),1);  
assert.equal(countAboveThreshold([1,2,3,4],1),3);  

// large input
assert.equal(countAboveThreshold([21,43,65,14,57],14),4);  
assert.equal(countAboveThreshold([45,25,75,24,75,2,65,25,11,66],40),5);  
assert.equal(countAboveThreshold([35,642,624,264,276,136,644,755,757,2222],591),6);  

// all matches
assert.equal(countAboveThreshold([43,65,21,54,76,86,24],10),7);  
assert.equal(countAboveThreshold([43,65,76,22,568,845,426,354,125,7564,12345,2754],20),12);  
