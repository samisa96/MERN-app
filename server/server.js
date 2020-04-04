const express = require("express");
const cors = require("cors");
const router = express.Router();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json()); //used to accept data from frontend as js object.


mongoose.connect('mongodb://localhost:27017/auctionsdatabase', {useNewUrlParser: true, useUnifiedTopology: true});

const port = process.env.PORT || 5000;

// const homePage = require("./routes/homepage");
// app.use('/', homePage);

const loginPage = require("./routes/login");
app.use('/login', loginPage);

const signupPage = require("./routes/register");
app.use('/register', signupPage);


app.listen(port, () => {
    console.log("server is running on port 5000");
})

