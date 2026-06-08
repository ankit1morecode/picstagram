const userModel = require("../models/user.model");
let uploadFile = require("../services/storage.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function register(req, res) {
    try {
        const { username, email, password ,fullName ,bio} = req.body;
        const ifUserExists = await userModel.findOne({
            $or: [
                { username }
                , { email }
            ]
        });
        if(ifUserExists){
            return res.status(409).json({
                message: "user already Exists"
            })
        }
        const hash = await bcrypt.hash(password, 10);
        let result = await uploadFile(req.file.buffer);
        let newUser = await userModel.create({
            username,
            email,
            password: hash,
            fullName,
            pfp:result.url,
            bio
        })
        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(201).json({
            message: "User Registered Successfully",
            newUser
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: "Bad Request"
        })
    }
}

async function login(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        })
        if (!user) {
            return res.status(401).json({
                message: "invalid credentials"
            })
        }
        console.log(user)

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid){
            return res.status(401).json({
                message: "invalid credentials"
            })
        }
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.status(200).json({
            message: "user loged in successfully",
            user
        })
    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: "invalid credentials"
        })
    }
}

module.exports = { register, login };