import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Shadow");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>Name: Shadow</h1><br><h1>Hobbies: Learning Japanese, Gaming</h1>"
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1> Github:@the-last-monarch</h1>");
});

app.listen(3000, () => {
  console.log("Server running on 3000.");
});
