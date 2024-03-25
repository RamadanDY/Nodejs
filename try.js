var http = require("http");

http
  .createServer(function (req, res) {
    // res.writeHead(200, { "content-Type": "text/html" });
    res.write(req.url);
    res.end("<h1>the name of the school is </h1>");
  })
  .listen(8000);

// const express = require("express");
// const app = express();
// const fs = require("fs");

// const username = "ramadan";

// fs.writeFile("thenewface.txt", "Ramadan:" + username, function (req, res) {
//   if (err) {
//     console.log("err");
//     return;
//   } else {
//     console.log("wrote file");
//   }
// });
