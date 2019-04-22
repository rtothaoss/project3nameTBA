var express = require("express");
var exphbs = require("express-handlebars");
const puppeteer = require('puppeteer');
var mongoose = require("mongoose");

var db = require('./models')


var PORT = 3000;

mongoose.connect("mongodb://localhost/supreme", { useNewUrlParser: true });

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});