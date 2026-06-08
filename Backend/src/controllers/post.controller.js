const postModel = require("../models/post.model");
const uploadFile = require("../services/storage.service");


async function createPost(req, res){
    let user = req.user; 
    let result = await uploadFile(req.file.buffer);
    let post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
        author : user.id
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