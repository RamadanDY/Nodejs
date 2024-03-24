var express = require("express");
var app = express();

app.get("/hello", function (req, res) {
  res.send("Hello World!");
});
app.get("/hell", function (req, res) {
  res.send("go gerri");
});
app.all("*", (req, res, next) => {
  console.log("A request was received");
  next(); // Pass control to the next middleware function/route handler
});

app.listen(8000);

// const express = require("express");
// const app = express();

// app.get("/app", (req, res) => {
//   res.send("hello world");
// });
// app.listen(3000);
