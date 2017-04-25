'use strict';

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

// ROUTES
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
});

router.post('/', function(request, response) {
  response.send('Doing a post...');
});

module.exports = router;





// router.get('/', function(request, response) {
//   // response.send('Hey, what is up..................');
//   const people = [{name: 'Full', age: 10}, {name: 'Stacker', age: 5}, {name: 'Son', age: 50}];
//   var fn = function(){
//     return "hey";
//   };
//   response.render( 'index', {title: 'Hall of Fame', people: people, fn: fn} );
// });

// router.get('/news', function(request, response) {
//   response.send('News ...');
// });
