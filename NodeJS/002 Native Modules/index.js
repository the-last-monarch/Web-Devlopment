const fs = require("fs");

// fs.writeFile("text1.txt", "Hello Shadow", (err) => {
//   if (err) throw err;
//   console.log("The file is been saved!");
// });

fs.readFile("./text1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// console.log("Here is your file");
