const express = require("express"),
    app = express();

app.get("/", (req, res)=> {
    res.send("Welcome! It's about to go down. New version");
})

app.listen(3000, ()=>{
    console.log("Yelp Server's up!");
});

//added a comment