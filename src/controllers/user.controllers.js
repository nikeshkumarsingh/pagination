const path= require("path");
const express= require("express");
const transporter= require("../config/mail");
const User=require("../models/user.models.js");
const router=express.Router();
router.get("/",async(req,res)=>{
    try{
        const page=req.query.page||1;
        const pagesize=req.query.pagesize||10;
        const skip=(page-1)*pagesize;
        const users =await User.find().skip(skip).limit(pagesize).lean().exec();
        const totalpages =Math.ceil(
            (await User .find().countDocuments())/pagesize
        );
        return res.status(200).send({users,totalpages});
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.post("/",async(req,res)=>{
    try{
        const user=await User.create(req.body);
        transporter.sendMail({
            from: '"ABC admin" <admin@abc.com>', // sender address
            to: user.email, // list of receivers
            subject: "Your registration is successfully created", // Subject line
            text: `Welcome ${user.first_name  }  ${user.last_name} your registration is successfull`, // plain text body
            
          });
        return res.status(201).send({message:"Thanx for registration"});
    }
    catch(err){
       return res.status(500).send({message:err.message});

    }
});
module.exports=router;