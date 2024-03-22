// checking the total memory space and the space left
const os = require("os");
const totalmem = os.totalmem();
const freememory = os.freemem();
// console.log("total memory:" + totalmem);
console.log(`total memory + ${totalmem}`);
console.log(`freespace + ${freememory}`);

//// modules with mosh
// using the path module to tell u the path of the file is being stored in

// const path = require("path");
// const pathobject = path.parse(__filename);
// console.log(pathobject);

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "youremail@gmail.com",
//     pass: "yourpassword",
//   },
// });

// var mailOptions = {
//   from: "youremail@gmail.com",
//   to: "myfriend@yahoo.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter
//   .sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   })
//   .listen(8000);

// how to upload a file using the formidable module
// const formidable = require("formidable");
// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(function (req, res) {
//     if (req == "./ramadan-data.txt") {
//       const form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         const oldpath = files.ramadan - data.txt.filepath;
//         const newpath = "C:/Users/ramadan/" + files.ramadan - data.new;
//         fs.rename(oldpath, newpath, function (err) {
//           if (err) throw err;
//           res.write("file upload and moved");
//           res.end();
//         });

//         res.write("file uploaded");
//         res.end();
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8000);
// end

/// format for the uploading of files
// this creats the input form
// const formidable = require("formidable");
// const http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(
//       '<form action="fileupload" method="post" enctype="multipart/form-data">'
//     );
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write("</form>");
//     return res.end();
//   })
//   .listen(8000);

///// this nodejs outputs the content of the file that has been created and
// outputs 404 ... if the requested server is not found
// and the status code 200 indicates that it was a succesfull respose and
// the res.write(data) write the content of the file stored in the file
// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// http
//   .createServer(function (req, res) {
//     const q = url.parse(req.url, true);
//     const filename = "." + q.pathname;
//     // there is no need for u to manually enter the file path but in this case we stored it inside a cont

//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 was not found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(4000);

// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "content-Type": "text/html" });
//     res.write(req.url);
//     res.end("<h1>the name of the school is </h1>");
//   })
//   .listen(8000);

// const http = require("http");

// const fs = require("fs");
// const userName = "ramadan";

// fs.writeFile("ramadan-data.txt", "Name: " + userName, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("wrote file");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("INCOMING REQUEST");
//   console.log(req.method, req.url);

//   if (req.method === "POST") {
//     let body = "";
//     req.on("end", () => {
//       const userName = body.split("=")[1];
//       res.end("<h1>" + userName + "</h1>");
//     });

//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.end(
//       '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
//     );
//   }
// });

// server.listen(5000);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("INCOMING REQUEST");
//   console.log(req.method, req.url);
//   if (req.method === "POST") {
//     let body = "";
//     res.on("end", () => {
//       console.log(body);
//       res.end("<h1>got the post request</h1>");
//     });
//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.end(
//       "<form  method='POST'><input type='text' placeholder='enter' name='username'><button type='submit'>Create User</button></form>"
//     );
//   }
// });
// server.listen(4000);
