let assert = require('assert');
let { getIndex } = require('../lib/arrayLibrary.js');

// no input 
assert.equal(getIndex([],),-1);  
assert.equal(getIndex([],0),-1);  
assert.equal(getIndex([1,2],0),-1);  

assert.equal(getIndex([1,2,3],1),0);  

assert.equal(getIndex([1,2,3,4],3),2);  
assert.equal(getIndex([12,32,45,17,84,58],45),2);  
assert.equal(getIndex([56,45,65,12,45,23],45),1);  

//negative numbers
assert.equal(getIndex([-12,-23,-64,-34,-91],-23),1);  
