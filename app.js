'use strict';

// REQUIRING MODULES
const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const app = express();
const volleyball = require('volleyball');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

// CONFIGURING APP
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

// LOGGING MIDDLEWARE
app.use(morgan('dev')); // Quicker method to log middleware responses using morgan npm

// SERVING STATIC FILES
app.use(express.static('public'));

// apply/plug-in the routes to the application
app.use('/', routes);

// ERROR-HANDLING MIDDLEWARE
app.use(function(error, request, response, next){
  console.log('Something went wrong', error);
  response.send('Something went wrong: ' + error.message);
})

app.listen(3000, function() {
    console.log('Listening to port 3000...');
})


// // Added nunjucks Templating Engine
// // in some file that is in the root directory of our application... how about app.js?
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

