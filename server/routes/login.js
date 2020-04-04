const router = require('express').Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const saltRounds = 5;

router.post('/', (req, res) =>{
    User.findOne({userEmail: req.body.email}, function(err, founduser){
        if(founduser){
            const hash = founduser.password;
            bcrypt.compare(req.body.password, hash, function(err, result) {
                if(result === true){
                    console.log("User authentication success");
                }
                else{
                    console.log("User is not there in our DB");
                }
            });

        }
    })


});

module.exports = router;