const mongoose = require("mongoose");
const coupon = new mongoose.Schema({
    "text":Text,
    "discountPercentage":Number
});
const couponModel = mongoose.model("coupon",coupon);
module.exports = couponModel;