const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("hello");
});
app.get("/myName",function(req,res){
    res.send("nithin");
});
app.listen(3000,function(){
    console.log("server runnning on http://localhost:3000");
});