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


});
module.exports =mongoose.model('pack', paqueteSchema);