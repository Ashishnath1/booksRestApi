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

//routes
//When I tried to use this first without commiting to git, error showed 404 Not Found
//Answer: I need to restart server again, I forgot to run node index.js again

app.use("/api/books", booksRoute);

app.listen(PORT, ()=> {
    console.log("Server running at 3000");
})
