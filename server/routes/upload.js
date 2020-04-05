const router = require('express').Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
    console.log(req.body);
})


module.exports = router;