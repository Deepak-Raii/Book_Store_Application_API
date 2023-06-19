const mongoose = require("mongoose");
require("../Connection/config");


const userModel = mongoose.Schema({
    item:{
        type:String,
    },

})

module.exports = mongoose.model("UserDatabase",userModel);