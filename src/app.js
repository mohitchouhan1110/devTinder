const express = require('express');
const connectDB = require("./config/database")
const app = express();


const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


app.use(express.json());
app.use(cookieParser());



const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");


app.use("/" , authRouter);
app.use("/" , profileRouter);
app.use("/",  requestRouter);

//Profile API




//Get user by email
// app.get("/user",async (req,res)=>{
//     const userEmail = req.body.emailId;

//     try{
//         const user = await User.find({emailId: userEmail });
//         if(user.length===0){
//             res.status(404).send("user not found");
//         } else {
//         res.send(user);
//     }
//     } catch(err){
//         res.status(400).send("Something went wrong");
//     }
// });

// //Feed API - Get /feed -get all the user from the database
// app.get("/feed", async (req,res)=>{
//     try{
//       const user = await User.find({});
//       res.send(user);
//     }
//     catch (err){
//      res.status(400).send("Something went wrong");
//     }
// })

// app.delete("/user", async (req,res)=>{
//     const userId = req.body.userId;
//     try{
//     const user = await User.findByIdAndDelete(userId);

//     res.send("User deleted Successfully");
//     } catch(err){
//        res.status(400).send("Something went wrong");
//     }
// } );

// app.patch("/user",async (req,res)=>{
//     const userId = req.body.userId;
//     const data = req.body;
//     //console.log(data);

    

//     try{
//         const ALLOWED_UPDATES = ["userId","photoUrl","about","gender","age","Skills"];

//     const isUpdateAllowed = Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k)
// );
//    if(!isUpdateAllowed){
//     throw new Error("Update not allowed");
// }
//         await User.findByIdAndUpdate({_id: userId},data);
//         res.send("user updated successfully");
//     }catch(err){
//         res.status(400).send("UPDATE FAILED:"+ err.message);
//     }
// });



connectDB()
.then(()=>{
    console.log("Database connection established...");
    app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...");
});
})
.catch((err)=>{
    console.error("Database cannot be connected!!!");
});


