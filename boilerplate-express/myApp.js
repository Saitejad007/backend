require("dotenv").config();
const bodyParser = require('body-parser')

let express = require("express");
let app = express();
console.log("Hello World");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

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

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time,
    });
  }
);

app.get("/:word/echo", function (req, res) {
  const { word } = req.params;
  res.json({ echo: word });
});

// app.route('/').get(handler).post(handler);



app.route("/name").get(function (req, res) {
  res.json({ name: `${req.query.first} ${req.query.last}` });
})

app.route('/name').post(function(req,res){
  console.log(req.body)
  res.json({name: `${req.body.first} ${req.body.last}`})
})



module.exports = app;
