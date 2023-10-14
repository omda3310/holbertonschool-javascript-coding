#!/usr/bin/node
const f = require('fs');
const filepath = process.argv[2];
const content = process.argv[3];

f.writeFile(filepath, content, function (error) {
  if (error) {
    console.log(error);
  }
});
