const express=require("express");
const{getuserQ}=require("../controllers/user");
const router=express.Router();

router.post("/",getuserQ);

module.exports=router;


