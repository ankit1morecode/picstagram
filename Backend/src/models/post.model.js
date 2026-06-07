const mongoose = require("mongoose");

let post = new mongoose.Schema({
    image : String,
    caption : String
})

let postModel = mongoose.model("post",post);

module.exports = postModel;