const validator = require("validator");

const validateSignUpData = (req)=>{
    const {firstName , lastName , emailId , password} =req.body;

    if(!firstName||!lastName){
        throw new Error("Name is not valid!!");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("email is not valid!");
    } else if(!validator.isStrongPassword(password)){
        throw new Error("Please entre a strong password!!");
    }
};

const validateEditProfileData = (req)=>{
    const allowedEditFields=["firstName",
        "lastName",
        "emailId",
        "photoUrl",
        "gender",
        "age",
        "about",
        "Skills",
    ];
    const isEditAllowed = Object.keys(req.body).every((field)=>allowedEditFields.includes(field));
    return isEditAllowed;
};

module.exports = {
    validateSignUpData,
    validateEditProfileData
};