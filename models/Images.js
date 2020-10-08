const mongoose = require ("mongoose")

const imageSchema = new mongoose.Schema({  
    title: String,
    imgUrl: String,
    link: String,
    name: String,    
    enable:Boolean
});

const imageModel = mongoose.model("Images",imageSchema);

module.exports= imageModel;