//recieving data and printing it out in a form
const express = require("express");
const app = express();

app
  ///the use method is used to
  .use((req, res, next) => {
    res.send(
      "<fom><input type='text' placeholder='enter' name='username'><button type='submit'>create user</button></button></fom>"
    );
  })
  .listen(1000);
