const router = require('express').Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const saltRounds = 5;

router.post('/', (req, res) =>{
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const newUser = new User({
            userName:req.body.name,
            userEmail:req.body.email,
            password:hash
        })
        newUser.save(function(err){
            if(err){
                console.log("User signup failed");
                res.send("signup failed");
            }else{
                console.log("USer created");
                res.sendStatus(200);
            }
        });
    });

});

module.exports = router;