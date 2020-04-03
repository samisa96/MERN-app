const router = require('express').Router();
const User = require("../models/users");

router.route('/').post((req, res) =>{
    const useremail = req.body.email;
    const password = req.body.password;

    User.find({userEmail: useremail, password: password})
} )