const mongoose = require("mongoose");
const coupon = new mongoose.Schema({
    text:String,
    discountPercentage:Number,
    name:String
});
const couponModel = mongoose.model("Coupons",coupon);
module.exports = couponModel;