import express from 'express';
const app = express();

app.get("/", function(request, respond){
  respond.send("Hello World");
})

app.get("/contact", function(req, res){
  res.send("Contact me at: email: shadow@gmail.com")
})

app.get("/about", function(req, res){
  res.send("I am Shadow, a web devloper.")
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});