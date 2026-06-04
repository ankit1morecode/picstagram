const mongoose = require("mongoose");

let post = new mongoose.Schema({
    img_url : String,
    caption : String
})

let postModel = mongoose.model("post",post);

module.exports = postModel;