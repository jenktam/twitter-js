'use strict';

const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const app = express();

app.use('/', function(request, response, next) {
  // GOAL --> display: GET / 200
  //                   http-verb url status
  let status = 200;
  response.status = 200;
  let text = request.method + ' ' + request.url;
  let output = chalk.blue(text + ' ' + status);
  console.log(output);
  next();
})

app.get('/', function(request, response) {
  response.send('Hey, what is up..................');
})

app.get('/news', function(request, response) {
  response.send('News ...');
})

app.post('/', function(request, response) {
  response.send('Doing a post...');
})

app.listen(3000, function() {
    console.log('Listening to port 3000...');
})