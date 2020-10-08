const mongoose = require("mongoose");
const cupon = new mongoose.Schema({
    "text":Text,
    "discountPercentage":Number
});
const cuponModel = mongoose.model("cupon",cupon);
module.exports = cuponModel;