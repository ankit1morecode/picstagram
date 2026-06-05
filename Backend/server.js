let app = require("./src/app");
let connectDB = require("./src/db/db");
require("dotenv").config();

connectDB().then(()=>{
    console.log("connected to DB");
}).catch((e)=>{
    console.log(`error in connecting with DB , ERROR : ${e}`);
})

let port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})