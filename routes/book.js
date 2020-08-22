var express       = require('express');
var router        = express.Router();

//Dummy Book Data
const booksDummyData = require('../models/books.js');


//GET book/:id
router.get('/:id', (req, res)=>{
  
  const bookIds = req.params.id;

  const results = booksDummyData.find((book)=>{

    return book.bookId == bookIds;

  })
  
  res.render('single-book', {results});

})


//POST book
router.post("/", function(req, res){

  let newBook = {
    bookId : booksDummyData.length + 1,
    name : req.body.bookName,
    isbn : req.body.bookIsbn
  }

  booksDummyData.push(newBook);

  res.render('book', { booksDummyData })

});



module.exports = router;
