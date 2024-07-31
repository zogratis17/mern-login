const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true, enum:   
   ['Male', 'Female', 'Other'] },
    age: { type: Date, required: true },
    occupation: { type: String, required: true },
    bio: { type: String, maxlength: 500 },
  });
  
  module.exports = mongoose.model('Form', formSchema);