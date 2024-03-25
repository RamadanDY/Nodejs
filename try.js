/// this nodejs outputs the content of the file that has been created and
// outputs 404 ... if the requested server is not found
// and the status code 200 indicates that it was a succesfull respose and
// the res.write(data) write the content of the file stored in the file
const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    // there is no need for u to manually enter the file path but in this case we stored it inside a cont

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 was not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(4000);

// var http = require("http");

// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "content-Type": "text/html" });
//     res.write(req.url);
//     res.end("<h1>the name of the school is </h1>");
//   })
//   .listen(8000);

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
