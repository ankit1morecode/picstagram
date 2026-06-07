let express = require("express");
const authRoutes = require("../src/routes/auth.routes.js")
const postRoutes = require("../src/routes/post.routes.js")
const cookieParser = require("cookie-parser");
let cors = require("cors");

let app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);

module.exports = app;