var express = require("express");
var exphbs = require("express-handlebars");

var PORT = 3000;

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

  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });