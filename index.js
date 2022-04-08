const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser: true})
.then(() => {
    console.log("Connected to Mongodb Atlas");
}).catch((error) => {
    console.log(error);
})
app.get("/", (req, res) => {
    res.send("Server running")
})

app.listen(PORT, ()=> {
    console.log("Server running at 3000");
})
