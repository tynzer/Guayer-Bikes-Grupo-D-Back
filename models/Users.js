const mongoose = require ("mongoose")

const usuarioSchema = new mongoose.Schema({  
    token : String,
    name : String,
    email : String,
    sendEmail : Boolean,
    visible : Boolean
});

const usaurioModel = mongoose.model("Users",usuarioSchema);

module.exports= usaurioModel;