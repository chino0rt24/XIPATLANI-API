const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });
  
const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
    type:String,
    required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    location:{
       place: String,
       geo: {
        type: pointSchema,
        index: '2dsphere',
        required: true
       } 
    },
    referencia:{
        type:String,
        required:true
   },
   package: String

},{timestamps:true});
module.exports = mongoose.model('Customer', customerSchema);