 const express = require("express");

 const app = express();

app.use("/",(req,res)=>{
    res.send("Hello from the dash!");
});

app.use("/hello",(req,res)=>{
    res.send("Hello Hello Hello!");
});

app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
})

 app.listen(3000,()=>{
    console.log("Server is successfully on port 3000...");
 });