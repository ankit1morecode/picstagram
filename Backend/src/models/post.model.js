const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        trim: true,
    },
    image:{
        type: String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    ],
    comments:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: true
            },
            text:{
                type: String,
                required: true,
                trim: true
            },
            createdAt:{
                type: Date,
                default: Date.now
            }
        }
    ]
},{
    timestamps: true,
},
);


let postModel = mongoose.model("post", postSchema);

module.exports = postModel;