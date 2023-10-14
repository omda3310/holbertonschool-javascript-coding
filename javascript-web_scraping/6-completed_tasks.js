#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

const completedTasks = {};

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  else {
    const todos = JSON.parse(body);

    for (const todo of todos) {
      if (todo.completed) {
        if (completedTasks[todo.userId]) {
          completedTasks[todo.userId]++;
        }
        else {
          completedTasks[todo.userId] = 1;
        }
      } 
    }
  }
  console.log(completedTasks);
});
