const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    username:{type:String,require:true},
    status:String,
    permission:{
        type:[String],
        default:[]
    },
    createdAt:{type:Date,default:Date.now},
    updatedAt:Date
})

const UserModel=mongoose.model("user",userSchema);

module.exports={
    UserModel
}