const mongoose = require("mongoose");

const ProductSchema = {
    productName: String,
    productDescription: String,
    uploaderContact: Number,
    inititalBid: Number,
    deadline: Date,
    imageURL: String 
};

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;