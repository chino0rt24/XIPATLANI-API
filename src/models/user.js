const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
    type:String,
    required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    cp:{
    type:Number,
    required:false
    },
    CiudadLocalidad:{
        type:String,
        required:true
    },
    referencia:{
        type:String,
        required:true
   }

});
module.exports =mongoose.model('User', userSchema);