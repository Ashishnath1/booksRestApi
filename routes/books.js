const express = require("express");
const router = express.Router();
const {Book, validateBook} = require("../models/books");

//POST: Create a new book
router.post("/", async (req, res) => {
    try{
       const message = await validateBook(req.body);
       if(message)
       {
           res.status(400).send(message);
       }
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