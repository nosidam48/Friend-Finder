// require the various npm modules and files
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes.js") 
var path = require("path");
var fs = require("fs");

// Create express app instance.
var app = express();
// initialize bodyParser to help read JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/static", express.static("app/public"))
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: ""
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Our get and post routes. Logic in htmlRoutes.js and apiRoutes.js
// Home route
app.get("/", htmlRoutes.home);

// Survey Route
app.get("/survey", htmlRoutes.survey);

// Api/friends route where the user objects are stored
app.get("/api/friends", apiRoutes.friends);
app.post("/api/friends", apiRoutes.friendsPost);

// Listen for the connection
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
