const fs = require("fs");

// fs.writeFile("Message.txt", "Hello Shadow", (err) => {
//   if (err) throw err;
//   console.log("The file is being saved");
// });

fs.readFile("./Message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
