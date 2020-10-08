const mongoose = require ("mongoose")

const imageSchema = new mongoose.Schema({  
    title: String,
    imgUrl: String,
    link: String,
    name: String,    
    visible : Boolean
});

const imageModel = mongoose.model("images",imageSchema);

module.exports= imageModel;