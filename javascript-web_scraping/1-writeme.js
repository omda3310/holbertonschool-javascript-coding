#!/usr/bin/node
const f = require('fs');
const file_path = process.argv[2];
const content = process.argv[3];

f.writeFile(file_path, content, function (error) {
  if (error) {
    console.log(error);
  }
});
