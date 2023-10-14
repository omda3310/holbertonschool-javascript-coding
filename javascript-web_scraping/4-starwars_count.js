#!/usr/bin/node

const request = require('request');
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';
let count = 0;

request(apiUrl, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    films.forEach(function(film) {
    if (film.characters.includes("18")) {count++;}
    });
  }
  console.log(count);
});
