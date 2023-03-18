const mongoose = require("mongoose");

const paqueteSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    costo:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },


},{timestamps:true});
module.exports =mongoose.model('Package', paqueteSchema);