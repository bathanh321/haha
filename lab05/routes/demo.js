var express = require('express')
var router = express.Router()

router.get('/demo', (req, res)=>{
    res.render('/demo')
})

router.get('/test', (req, res)=>{
    res.render('test')
})
module.exports = router