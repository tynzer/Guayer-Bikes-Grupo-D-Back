const mongoose = require ("mongoose")

const usuarioSchema = new mongoose.Schema({  
    token : String,
    name : String,
    email : String,
    sendEmail : Boolean,
    enable:Boolean
});

const usaurioModel = mongoose.model("Users",usuarioSchema);

module.exports= usaurioModel;