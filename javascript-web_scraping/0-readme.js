#!/usr/bin/node

/* File System Object */
const fs = require('fs');
const argv = process.argv[2];

/* Read File */
fs.readFile(argv, 'utf8', (err, data) => {
    if(err) {
      console.log(err.message);
  } else {
      console.log(data);
  }
  });
