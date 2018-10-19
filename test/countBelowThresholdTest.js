let assert = require('assert');
let { countBelowThreshold } = require('../lib/arrayLibrary.js');

//no input
assert.equal(countBelowThreshold([],1),0);  

assert.equal(countBelowThreshold([1,3],2),1);  
assert.equal(countBelowThreshold([1,2,3,4],2),1);  

// large input
assert.equal(countBelowThreshold([21,43,65,14,57],30),2);  
assert.equal(countBelowThreshold([45,25,75,24,75,2,65,25,11,66],40),5);  
assert.equal(countBelowThreshold([35,642,624,264,276,136,644,755,757,2222],591),4);  

// all matches
assert.equal(countBelowThreshold([43,65,21,54,76,86,24],100),7);  
assert.equal(countBelowThreshold([43,65,76,22,568,845,426,354,125,7564,12345,2754],99999),12);  
