const username = "Ramadan";
console.log(username);

const fs = require("fs");
fs.writeFile("newTextFile.txt", "Name:" + username, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("wrotefile");
});
