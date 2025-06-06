const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://mc3984925:mohit1110@mohitnode.ilceiab.mongodb.net/devTinder");
};

module.exports = connectDB;
