const express = require("express");
const multer = require("multer");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware"); 

const router = express.Router();

let upload = multer({storage:multer.memoryStorage()});

router.patch("/update/:id",authMiddleware.userAuth,userController.updateUser);



module.exports = router;