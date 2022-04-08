
const mongoose = require("mongoose");
const Author = require("./author");
//book schema
const BooksSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        minlength : 3,
        maxlength : 20
    },
    //author schema is made separately to show how to embed one schema within another
    author : Author.schema,
    genre : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    }
});

const Books = new mongoose.model("Book", BooksSchema);
module.exports = Books;