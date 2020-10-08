const mongoose = require("mongoose");
const coupon = new mongoose.Schema({
    text:String,
    discountPercentage:Number
});
const couponModel = mongoose.model("Coupon",coupon);
module.exports = couponModel;