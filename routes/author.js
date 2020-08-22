var express       = require('express');
var router        = express.Router();

//Dummy Author Data
const authorsDummyData = require('../models/authors.js');


//GET author/:id
router.get('/:id', (req, res)=>{
  
  const authorIds = req.params.id;

  const results = authorsDummyData.find((author)=>{

    return author.authorId == authorIds;

  })
  
  res.render('single-author', {results});

})


//POST author
router.post("/", function(req, res){

  let newAuthor = {
    authorId : authorsDummyData.length + 1,
    firstName : req.body.authorFirstName,
    lastName : req.body.authorLastName
  }

  authorsDummyData.push(newAuthor);

  res.render('author', { authorsDummyData })

});


module.exports = router;
