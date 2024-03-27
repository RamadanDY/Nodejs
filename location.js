const express = require("express");
/// the express is a function so we now we want it to give us an  obj so as  to give us all the functionalities and features that the obj name (app) can give me
const app = express();
//the next() included prevents it from sending a res to the next middleware but fowards the req to the middleware next inline
/// this middleware does smt to the post request that has been recieved the code runs this first before the one below
// we can parse our request body inside
app.use((req, res, next) => {
  let body = "";
  // this executes when we are done parsing our data
  req.on("end", () => {
    const username = body.split("=")[1];
    if (username) {
      req.body = { name: username };
    }
    next();
  });
  //parse the req body //chunks of data and also append the data here
  req.on("data", (chunk) => {
    body += chunk;
  });
});
/// the middleware the next() is what we call if we dont want to send a respond to this middleware but we want to send it the next middleware inline
app.use((req, res, next) => {
  //we now ant to check if request body is available
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  /// in express we use send instead of write
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
