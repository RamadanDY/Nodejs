const express = require("express");
const app = express();
const fs = require("fs");

const username = "ramadan";

fs.writeFile("thenewface.txt", "Ramadan:" + username, function (req, res) {
  if (err) {
    console.log("err");
  } else {
    console.log("wrote file");
  }
});
