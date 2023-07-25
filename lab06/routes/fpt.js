const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('fpt');
})

module.exports = router;