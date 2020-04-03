const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(
    bodyParser.urlencoded({extended: false }));

mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true});

const port = process.env.PORT || 5000;

const homePage = require("./routes/homepage");
app.use('/', homePage);

const loginPage = require("./routes/login");
app.use('/login', loginPage);

app.listen(port, () => {
    console.log("server is running on port " + port);
})

