const mongoose= require("mongoose");
const userSchema= new mongoose.Schema(
    {
        first_name:{type:String,reuired:true},
        last_name:{type:String,required:true},
        email:{type:String,reuired:true,unique:true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const User= mongoose.model("user",userSchema);
module.exports= User;