const mongoose = require("mongoose");

const UserSchema = {
    userName: String,
    userEmail: String,
    password: String
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
