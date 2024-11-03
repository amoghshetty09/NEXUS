const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
})

const User=mongoose.model("Q&A",schema);
module.exports=User;
