const mongoose=require("mongoose") 

const Post=new mongoose.Schema({
    UserID:{type:String,required:true},
    title:{type:String,required:true},
    tags:{type:String,required:true},
    Job_Description:{type:String,required:true},
    location:{type:String,required:true},
    budget:{type:String},
    photo_link:{type:String},
    status:{type:String}
}, { timestamps: true })

module.exports=mongoose.model("Post",Post) 