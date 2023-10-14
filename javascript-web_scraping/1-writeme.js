#!/usr/bin/node
const f = require('fs');
const { argv } = require('process');
const File_path = process.argv[2];
const content = process.argv[3];

f.writeFile(File_path, content, function(error) {
    if(error) {
        console.log(error);
    }
});
