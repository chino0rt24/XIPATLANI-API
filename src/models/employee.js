const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        unique:true
    },
     password:{
        type:String,
        required:true
    },


},{timestamps:true});
module.exports =mongoose.model('Employee', employeeSchema);