const imageKit = require("@imagekit/nodejs");
require("dotenv").config();

const imagekit = new imageKit({
    privateKey : process.env.PRIVATE_KEY_IMAGE_KIT
})

async function uploadFile(buffer) {
    let result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg"
    })
    return result;
}


module.exports = uploadFile;