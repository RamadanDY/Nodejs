const express = require("express");
/// the express is a function so we now we want it to give us an  obj so as  to give us all the functionalities and features that the obj name (app) can give me
const app = express();
/// this middleware does smt to the post request that has been recieved the code runs this first before the one below
// we can parse our request body inside
app.use((req, res, next) => {
  let body = "";
  req.on("end", () => {
    const username = body.split("=")[1];
    if (username) {
      req.body = { name: username };
    }
    next();
  });
  req.on("data", (chunk) => {
    body += chunk;
  });
});

app.use((req, res, next) => {
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    "<form  method='POST'><input type='text' placeholder='enter' name='username'><button type='submit'>Create User</button></form>"
  );
});
app.listen(1000);
/// in this case we do not need to call createServer express will do that under the hood ie all the functionalities that are stored in the const name (app)
/// when we want to handle our get route by just entering the localhost5000 we use smt called middleware on  the app and we use the use() method that takes 3 parameters (req,res,next ) =>
// we create a middle ware inside the function{}
/// lets now do smt with the post req
/// the send() sends an http request back to the client as we use write in express its send
/// lets do smt else with the post request by adding another  middleware
