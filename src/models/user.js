const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Username:{
        type:String,
        required:true
    }, 
   
    password:{
    type:String,
    required:false
    },

},{timestamps:true});

module.exports =mongoose.model('User', userSchema);