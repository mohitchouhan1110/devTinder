const express = require('express');

const app = express();

const {adminAuth} =require("./middlewares/auth");

//Handle Auth Middlewares for all GET POST ,.... requests
app.get("/admin",adminAuth);

app.get("/user",(req,res)=>{
    res.send("user Data Sent");
});

app.get("/admin/getAllData",(req,res)=>{
    res.send("All Data Send");
});

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a users");
});




app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...");
});