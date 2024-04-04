import mongoose from "mongoose";
//model schema for url collection in database
const userSchema=new mongoose.Schema({

   name:{
    type:String,
   },
   email:{
    type:String,
   },
   password:{
    type:String
   },
   status:{
      type:String
   },
   token:{
      type:String
   },
   data:{
      type:Array
   },

}
);

const Users=mongoose.model("users",userSchema);
export {Users};