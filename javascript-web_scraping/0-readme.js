#!/usr/bin/node
const { error } = require('console');
const fs = require('fs');
const argv = process.argv[2];

/* Read File */
fs.readFile(argv, 'utf-8', function(error, data) {
    if(error) {
      console.error(error);
  } else {
      console.log(data);
  }
  });
