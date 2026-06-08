const userModel = require("../models/user.model");


async function updateUser(req, res){ 
    const {id} = req.params;
    const {username,fullName,bio} = req.body;
    const user = await userModel.findByIdAndUpdate(id,{
        username,
        fullName,
        bio
    });
    
    res.status(201).json({
        message: "user profile updated successfully",
        user
    })
}

module.exports = {updateUser};