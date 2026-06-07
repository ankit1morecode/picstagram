const express = require("express");
const multer = require("multer");
const postControllers = require("../controllers/post.controller"); 
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

let upload = multer({storage:multer.memoryStorage()});

router.post("/create-post",authMiddleware.userAuth,upload.single("image"),postControllers.createPost);
router.get("/feed",authMiddleware.userAuth,postControllers.getPosts);

module.exports = router;