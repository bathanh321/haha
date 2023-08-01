    const mongoose = require('mongoose')
    var BookSchema = mongoose.Schema({
        title: String,
        author: String,
        date: Date,
        price: Number,
        quantity: Number,
        image: String,
        video: String
    })
    var BookModel = mongoose.model("sach", BookSchema, "demo.book")
    module.exports = BookModel