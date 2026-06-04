let express = require("express");
let postModel = require("./models/user.model.js");
let multer = require("multer");
let uploadFile = require("./services/storage.service.js");
let app = express();
app.use(express.json());   // for getting data in json formaat

/*
    GET /feed
    POST /newpost
*/

let upload = multer({storage:multer.memoryStorage()});   //for uploading file 

app.post('/newpost',upload.single("img-url"),async(req,res)=>{
    let result = await uploadFile(req.file.buffer);
    let post = await postModel.create({
        img_url: result.url,
        caption : req.body.caption
    })
    res.status(201).json({
        message : "post created successfully",
        post
    })
})

app.get('/feed',async (req,res)=>{
    let data = await postModel.find();
    res.status(200).json({
        message : "post fetched successfully",
        posts : data
    })
})

module.exports = app;