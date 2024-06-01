const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded()); 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.txt"));
});
app.listen(3000, () => {
   console.log("heee");
})