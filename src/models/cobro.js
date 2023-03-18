const mongoose = require("mongoose");

const cobroSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    idCustomer: {
        type: String
    },
    mount: {
        required:true,
        type:Number
    },
    date: {
        type: Date,
    },
    idEmployee: {
        type:String
    }

},{timestamps:true});
module.exports =mongoose.model('Cobro', cobroSchema);