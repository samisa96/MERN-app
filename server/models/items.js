const mongoose = require("mongoose");

const ProductSchema = {
    productDescription: String,
    productName: String,
    inititalPrice: Number,
    dateAdded: Date 
};

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;