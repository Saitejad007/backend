require('dotenv').config()

let express = require("express");
let app = express();
console.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.use('/',function(req,res,next){
  console.log(`${req.method} ${req.path} ${req.ip}`)
  next()
})

app.get("/json", function (req, res) {
  res.json({ message: process.env.MESSAGE_STYLE ==='uppercase'?'Hello json'.toUpperCase(): 'Hello json'});
});

module.exports = app;
