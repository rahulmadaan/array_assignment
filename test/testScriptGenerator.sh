#! /bin/bash
fileName=$1
functionName=$2
touch $fileName.js
echo "let assert = require('assert');" >> $fileName.js
echo "let { $functionName } = require('../lib/arrayLibrary.js');" >> $fileName.js
echo "" >>$fileName.js
echo "//" >>$fileName.js
echo "assert.equal($functionName(),);  " >> $fileName.js
echo "assert.equal($functionName(),);  " >> $fileName.js

