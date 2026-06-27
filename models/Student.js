const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
         required:true,
        unique:true
    },
    city: {
        type:String,
        default:"gorakhpur"
    },
    age: {
        type:Number
    }

}, {
    timeStamp: true
});

module.exports = mongoose.model("Student", studentschema);