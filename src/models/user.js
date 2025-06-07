const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        min: 18
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error ("Gender data is not valid")
            }
        },
    },
    about:{

    },
    Skills:{
        type: [String],
    },
    photoUrl:{
        type:String,
        default:"https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg"
    }
},
{
    timestamps:true,
});



module.exports = mongoose.model("user",userSchema);

