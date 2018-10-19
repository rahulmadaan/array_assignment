#! /bin/bash
fileName=$1
touch $fileName.js
echo "let assert = require('assert');" >> $fileName.js
echo "let lib = require('../lib/arrayLibrary.js');" >> $fileName.js
echo "" >>$fileName.js
echo "assert.equal((),);  " >> $fileName.js
echo "assert.equal((),);  " >> $fileName.js

