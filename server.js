const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(require('./server/routes/routes'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', () => {
    console.log(`App is running on port ${port}`);
});