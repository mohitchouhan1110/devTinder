const express = require("express");

const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");

profileRouter.get("/profile",userAuth, async (req,res)=>{

    // try{
    //     const cookies = req.cookies;

    // const{ token }=cookies;
    // if(!token){
    //     throw new Error("Invalid Token")
    // }
    // //Validate my token
    
    // const decodedMessage = async jwt.verify(token,"Dev@Tinder$790");
    
    // const { _id } = decodedMessage;
   try {
    const user = req.user;
    if(!user){
        throw new error("user does not exist");
    }

    res.send(user);}
    catch(err){
        res.status(400).send("ERROR :" + err.message);
    }

    //console.log(cookies);
    //res.send("Cookie Reading!!")
});


module.exports = profileRouter;