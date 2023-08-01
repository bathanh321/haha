var express = require('express');
const BookModel = require('../models/BookModel')
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) =>{
//  res.render('index', { title: 'Express' });
var books = await BookModel.find()
res.render('book_list', {books: books})
});

module.exports = router;
