const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password:{
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    pfp: {
      type: String,
      default: "https://static.vecteezy.com/system/resources/thumbnails/036/280/650/small/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg",
    },
    followers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }],
    following: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }],
  },
  { timestamps: true }
);

const userModel = mongoose.model("user",userSchema);


module.exports = userModel;