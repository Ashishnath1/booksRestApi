const express = require("express");
const router = express.Router();
const {Book, validateBook} = require("../models/books");

//POST: Create a new book
router.post("/", async (req, res) => {
    try{
       const message = await validateBook(req.body);
       if(message)
       {
           console.log(message);
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
        res.send(registerBook);
    }
    catch(error){
        console.log(error);
    }
 
});

//GET: get all books
router.get("/", async(req, res) => {
    try{
        const books = await Book.find();
        if(books){
            res.send(books)
        }
    }
    catch(error){
        console.log(error);
    }
  
});

//GET book by id
router.get("/:bookGenre", async(req, res) => {
   try {
       const book = await Book.findOne({genre : req.params.bookGenre},
        
        );
       if(book)
          res.send(book);
        else
          res.send("Book not found!");
   } catch (error) {
       console.log(error);
   }
});

router.put("/update/:bookName", async(req, res) => {
    try {
    
     const updatedBook = await Book.findOneAndUpdate({name : req.params.bookName},
        {
            name : req.body.bookName,
            author : {
                name : req.body.authorName, 
                age : req.body.authorAge
            },
            genre : req.body.genre
        },
        {new : true}
        );
        if(updatedBook)
           res.send(updatedBook);
        else
           res.send("Book not found!")
       
    } catch (error) {
        console.log(error);
    }
     
});

router.delete("/delete/:bookName", async(req, res) => {
    try {
        const deletedBook = await Book.findOneAndDelete({name : req.params.bookName});
        if(deletedBook)
           res.send(`The book ${deletedBook.name} deleted successfully`);
        else
           res.send("Book not found");   
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router;