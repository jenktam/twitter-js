'use strict';

const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const app = express();
const volleyball = require('volleyball');
const morgan = require('morgan');


// Longer method to log middleware responses
// app.use('/', function(request, response, next) {
//   // GOAL --> display: GET /news, GET / 200
//   //                   http-verb url status
//   // let status = 200;
//   // response.status = 200;
//   // response.send()
//   // let text = request.method + ' ' + request.url;
//   // let output = chalk.blue(text + ' ' + status);
//   // console.log(output);
//   console.log(request.method + ' ' + request.url + ' ' + response.statusCode);
//   next();
// })

// Quicker method to log middleware responses using morgan npm
app.use(morgan('dev'));


// var cats = [];

// Error-handling middleware
app.use(function(error, requeust, response, next){
  console.log('Something went wrong', error);
  response.send('Something went wrong: ' + error.message);
})

app.get('/', function(request, response) {
  response.send('Hey, what is up..................');
})

app.get('/news', function(request, response) {
  response.send('News ...');
});

// app.post('/cats', function(request, response) {
//   response.send('This is the POST /cats page');
//   var cat = Math.random() > 0.5 ? cat = '😺' : cat = '😿';
//   cats.push(cat);
//   response.json(cats);
// });

app.post('/', function(request, response) {
  response.send('Doing a post...');
})

app.listen(3000, function() {
    console.log('Listening to port 3000...');
})
