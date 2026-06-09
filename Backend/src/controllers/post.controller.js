const postModel = require("../models/post.model");
const uploadFile = require("../services/storage.service");

async function createPost(req, res){
    let user = req.user;
    let result = await uploadFile(req.file.buffer);
    let post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
        author: user.id
    })
    res.status(201).json({
        message: "post created successfully",
        post
    })
}

async function getPosts(req, res) {
    const posts = await postModel.find();
    res.status(200).json({
        message: "posts fetched successfully",
        posts
    })
}

async function likePosts(req, res){
    try{
        const { id } = req.params;
        const userId = req.user.id;
        const user = await postModel.findByIdAndUpdate(id,{
            $addToSet: {
                likes: userId
            }
        },{ returnDocument: "after" })
        res.status(201).json({
            message : "post liked successfully",
            user
        })
    }catch(err){
        console.log(`Error in liking post ${err}`);
    }
}

async function commentPosts(req,res){
       try{
        let {id} = req.body;
        let userId = req.user.id;
        let {text} = req.body;
        const user = await postModel.findByIdAndUpdate(id,{
            $addToSet :{
                user : userId
            },
            $set:{
                text:text
            }
        })
        res.status(201).json({
            message : "Comment added",
            newUser : await postModel.findById(userId)
        })
       }catch(err){
        console.log(err);
        res.status(500).json({
            message : "Error in adding comments"
        })
       } 
}

module.exports = { createPost, getPosts, likePosts , commentPosts };