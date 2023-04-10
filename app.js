const express = require('express');
const app = express();


const bodyparser = require("body-parser")



const PORT = process.env.PORT || 5000;
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("login.ejs");
});


app.get('/portfolio', (req, res, next) => {
    res.render("portfolio.ejs")
});
















app.listen(PORT, () => console.log ("server listening on port " + PORT))