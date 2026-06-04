let express = require("express");
let postModel = require("./models/user.model.js");
let multer = require("multer");
let app = express();
app.use(express.json());   // for getting data in json formaat

/*
    GET /feed
    POST /newpost
*/

let upload = multer({storage:multer.memoryStorage()});   //for uploading file 

app.post('/newpost',upload.single("img-url"),async(req,res)=>{
    let data = req.body;
    console.log(data);
    console.log(req.file);
    await postModel.create({
        img_url : data.img_url,
        caption : data.caption
    })
    res.status(204).json({
        message : "post created successfully"
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