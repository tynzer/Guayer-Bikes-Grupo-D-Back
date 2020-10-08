const mongoose = require("mongoose");
const productList = new mongoose.Schema({
    title:String,
    description:String,
    imgUrl:String,
    inStock:Number,
    price:Number,
    currency:String,
    discountPrice:Number
});
const productModel = mongoose.model("Product",productList);
module.exports = productModel;