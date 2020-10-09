const mongoose = require ("mongoose")

const imageSchema = new mongoose.Schema({  
    title: String,
    imgUrl: String,
    link: String,
    name: String,    
    enabled:Boolean
});

const imageModel = mongoose.model("Image",imageSchema);

module.exports= imageModel;