
import { ObjectId } from "mongodb";
import { Users } from "../Model/index.js";

//registration
export default function addingUsers(data){
    return Users.insertMany(data);
}
//finding Users using email
export function findingUsers(email){
    return Users.find({email});
}
//activating Users
export function activation(id){
    return Users.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{status:"Active"}});
}
//add token to db for forgot password
export function forgotToken(id,token){
    return Users.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{token}})
}
//finding Users using email
export function findUsers(id){
    return Users.find({_id:new ObjectId(id)});
}
//empty token value after resetting password
export function updatingPassword(id,password){
    return Users.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{password,token:""}});
}
//adding product to the user
export function addingProduct(id,data){
    return Users.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{data}});
}
