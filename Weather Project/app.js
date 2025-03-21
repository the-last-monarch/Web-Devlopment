const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityName;
  const apiKey = "7b2927f276beb78312c2991a44314d97";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    ",in&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    // console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1>Tempature in " + city + " is " + temp + " degree celcius</h1>"
      );
      res.write("<img src= " + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Port is running on port 3000");
});
