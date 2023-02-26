const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const app = express();
dotenv.config();
app.use(express.static("frontend"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/frontend/index.html");
});

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,function(err){
    if(err) console.log(err);
    else{
        console.log("DB connection successfull");
        app.listen(3000,function(){
            console.log("server runnning on http://localhost:3000");
        });
    }
})