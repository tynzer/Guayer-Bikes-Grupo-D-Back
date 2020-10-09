const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    imgUrl:String,
    inStock:Number,
    price:Number,
    currency:String,
    discountPrice:Number,
    enabled:Boolean
});
const productModel = mongoose.model("Product",productSchema);
module.exports = productModel;