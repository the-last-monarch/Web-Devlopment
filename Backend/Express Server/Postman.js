import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.post("/register", (req, res) => {
  res.send(201);
});

app.put("/user/shadow", (req, res) => {
  res.send(200);
});

app.patch("/user/shadow", (req, res) => {
  res.send(200);
});

app.delete("/user/shadow", (req, res) => {
  res.send(200);
});

app.listen(3000, () => {
  console.log("Server running on 3000.");
});
