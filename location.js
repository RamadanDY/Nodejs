const http = require("http");

http
  .createServer((req, res) => {
    res.write("name");
    res.end();
  })
  .listen(3000);
