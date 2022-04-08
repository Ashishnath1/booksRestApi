const { urlencoded } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()
const booksRoute = require("./routes/books")

const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));


mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser: true})
.then(() => {
    console.log("Connected to Mongodb Atlas");
}).catch((error) => {
    console.log(error);
})

app.get("/", (req, res) => {
    res.send("Server is running");
});
//routes
app.use("/api/books", booksRoute);

app.listen(PORT, ()=> {
    console.log("Server running at 3000");
})
