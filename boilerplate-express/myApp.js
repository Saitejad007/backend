require("dotenv").config();

let express = require("express");
let app = express();
console.log("Hello World");

app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res, next) {
  res.json({
    message:
      process.env.MESSAGE_STYLE === "uppercase"
        ? "Hello json".toUpperCase()
        : "Hello json",
  });
});

app.get("/now", function (req, res,next) {
  req.time = new Date().toString();
  next();
},(req, res) => {
  res.send({
    time: req.time
  })});

module.exports = app;
