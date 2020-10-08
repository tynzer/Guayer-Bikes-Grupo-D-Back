const mongoose = require ("mongoose")

const formSchema = new mongoose.Schema({  
    name: String,
    email: String,
    phone: Number,
    subject: String,    
    message : String
});

const FormModel = mongoose.model("Form",formSchema);

module.exports= FormModel;