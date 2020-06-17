var express = require('express');
var app = express();
var square = require('./squares');
var wiki = require('./wiki.js');
var logger = require('morgan');

// Add wiki route to middleware handling path
app.use('/wiki', wiki);

// Add morgan middleware to the stack
app.use(logger('dev'));

app.get('/', function (req, res) {
  res.send('Hello Wurld!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

  // Module Exercise
  console.log('The area of a square with a width of 5 is ' + square.area(5));
  console.log(
    'The perimeter of a square with a width of 5 is ' + square.perimeter(5)
  );

  // Async Exercise
  setTimeout(function () {
    console.log('First');
  }, 3000);
  console.log('Second');
});
