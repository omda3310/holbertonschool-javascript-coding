#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
let count = 0;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    for (const film of films) {
      for (const caracter of film.characters) {
        if (caracter.includes('18')) {
          count++;
        }
      }
    }
  }
  console.log(count);
});
