const http = require("http");

http
  .createServer((req, res) => {
    res.write("name");
    console.log(res.url);
    res.end();
  })
  .listen(3000);
