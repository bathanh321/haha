var express = require('express')
var router = express.Router()
var Mobile = require('../models/Mobile')

router.get('/', (req, res)=>{
    var text = "Mobile evolution";
    var year = 2023;
    res.render('mobile/index', {chu: text, so: year});
})

router.get('/list', (req, res)=>{
    var mobile1 = new Mobile(1, "Iphone 14 pro max", "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg")
    var mobile2 = new Mobile(2, "Galaxy S23 Ultre", "https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-S23-Ultra-782x800-1675282446.jpg")
    var mobile3 = new Mobile(3, "Mi notr 10 Pro", "https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg")
    var mobileList = [mobile1, mobile2, mobile3]
    res.render('mobile/list', {mobiles: mobileList})
})


module.exports = router;