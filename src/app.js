const express = require('express');
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")

app.use(express.json());

// app.post("/signup",async (req , res)=>{
//   console.log(req.body);
// });

app.post("/signup",async (req,res)=>{
    //Creating a new instance of the user models
    //Creating a new instance of the user models
    const user = new User(req.body)
   
    
   try{
  await user.save();
   res.send( "User added successfully")
   } catch(err){
    res.status(400).send("Error saving the user:" + err.message)
   }

  
});


//Get user by email
app.get("/user",async (req,res)=>{
    const userEmail = req.body.emailId;

    try{
        const user = await User.find({emailId: userEmail });
        if(user.length===0){
            res.status(404).send("user not found");
        } else {
        res.send(user);
    }
    } catch(err){
        res.status(400).send("Something went wrong");
    }
});

//Feed API - Get /feed -get all the user from the database
app.get("/feed", async (req,res)=>{
    try{
      const user = await User.find({});
      res.send(user);
    }
    catch (err){
     res.status(400).send("Something went wrong");
    }
})



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


