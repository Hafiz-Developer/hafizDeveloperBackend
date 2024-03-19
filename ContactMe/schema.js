const mongoose = require('mongoose');

const { Schema } = mongoose ;

const contactSchema  = new Schema({
    fullName : {
        type : String,
        require : [true , "first name is required"],
        minLenght: [3 , "first name should be greater than or equal 3 characrter"],
        maxLenght: [10 , "first name should be greater than or equal 10 characrter"],
    },
    contactNumber : {
        type : Number,
        require : [true , "number  is required"],
    },
    email : {
        type : String,
        require : [true , "email  is required"],
        minLenght: [10 , "email  should be greater than or equal 10 characrter"],
        maxLenght: [20 , "last  should be greater than or equal 20 characrter"],
    },
    projectType : {
        type : String,
        require : [true , "Project Type  is required"],
    },
    projectBudget : {
        type : String,
        require : [true , "Project Budget  is required"],
    },
    projectDesc : {
        type : String,
        require : [true , "Project Desc  is required"],
    },
    googleMeet : {
        type : String,
    },
    createdAt :{
        type :  Date,
        default : Date.now()
    }
})

const contactModel = mongoose.model("Contact" , contactSchema    )

module.exports = contactModel