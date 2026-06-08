let express = require("express");
const authRoutes = require("../src/routes/auth.routes.js")
const postRoutes = require("../src/routes/post.routes.js")
const userRoutes = require("../src/routes/user.routes.js")
const cookieParser = require("cookie-parser");
let cors = require("cors");

let app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);
app.use("/api/user",userRoutes);


module.exports = app;