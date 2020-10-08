const mongoose = require("mongoose");
const productList = new mongoose.Schema({
    "title":String,
    "description":String,
    "imgUrl":String,
    "inStock":Number,
    "price":Number,
    "currency":String,Number,
    "discountPrice":Number
});
const productModel = mongoose.model("product",productList);
module.exports = productModel;