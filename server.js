// Here is where we import modules
// We begin by loading Express
const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
require("./config/database");

const app = express();

//models
const Fruit = require("./models/fruit.js");

// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


// server.js

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  
  