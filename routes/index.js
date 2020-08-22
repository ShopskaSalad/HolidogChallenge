var express       = require('express');
var router        = express.Router();
const requestMod  = require('request');

//Dummy Book Data
const booksDummyData    = require('../models/books.js');
const authorsDummyData  = require('../models/authors.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index');

});


//get authors
router.get('/authors', function(req, res, next) {

  requestMod.get(authorsDummyData, (error, response)=>{
  
    res.render('author', { authorsDummyData})

  })

});

//get books
router.get('/books', function(req, res) {

  requestMod.get(booksDummyData, (error, response)=>{

  res.render('book', { booksDummyData })

  })
});

module.exports = router;
