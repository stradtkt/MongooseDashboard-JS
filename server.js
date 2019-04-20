const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs")