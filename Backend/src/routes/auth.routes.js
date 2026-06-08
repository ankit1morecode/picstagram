const express = require("express");
const authControllers = require("../controllers/auth.controller"); 
const multer = require("multer");

const router = express.Router();

const upload = multer({storage:multer.memoryStorage()});

router.post("/register",upload.single("image"),authControllers.register);
router.post("/login",authControllers.login);

module.exports = router;