var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//1. get method to render login page to form input

router.get('/login', (req, res)=>{
  res.render('login');
})

//2. post method to receive input from form
router.post('/login', (req, res)=>{
  //get data inputed to form
  var data = req.body;
  var username = data.username
  var password = data.password
  // console.log(username)
  // console.log(password)
  if(username == "admin" && password == "123456"){
    res.send("<h1>Login Passed</h1>")
  }else{
    res.send("<h1>Login Failed</h1>")
  }
  res.send(data)
})
router.get('/input', (req, res)=>{
  res.render('add_student')
})
router.post('/output', (req, res)=>{
  res.render('view_student', {student: req.body})
})
module.exports = router;
