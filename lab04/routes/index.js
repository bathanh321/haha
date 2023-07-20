var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hanoi', (req, res, next) => {
  res.render('hn')
})
module.exports = router;
