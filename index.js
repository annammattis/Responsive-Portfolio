// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 8000;
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    // res.status(200).send('index.html');
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log('Running on localhost:8000');
});