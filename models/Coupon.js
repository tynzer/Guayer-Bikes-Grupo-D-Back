const mongoose = require("mongoose");
const couponSchema = new mongoose.Schema({
    text:String,
    discountPercentage:Number,
    name:String
});
const CouponModel = mongoose.model("Coupon",couponSchema);
module.exports = CouponModel;