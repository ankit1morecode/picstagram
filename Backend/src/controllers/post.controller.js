const postModel = require("../models/post.model");
let uploadFile = require("../services/storage.service");

async function createPost(req, res){ 
    let result = await uploadFile(req.file.buffer);
    let post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    res.status(201).json({
        message: "post created successfully",
        post
    })
}

async function getPosts(req,res){
    const posts = await postModel.find();
    res.status(200).json({
        message:"posts fetched successfully",
        posts
    })
}

module.exports = {createPost,getPosts};