const express = require("express");
const router = express.Router();
const Book = require("../models/books");

//POST: Create a new book
router.post("/", async (req, res) => {
    try{
        const book = new Book({
            name : req.body.bookName,
            author : {
                name : req.body.authorName,
                age : req.body.authorAge
            },
            genre : req.body.genre
        });
        const registerBook = await book.save();
        res.send(book);
    }
    catch(error){
        res.status(500).send("book was not stored in database");
        console.log(error);
    }
 
});

module.exports = router;