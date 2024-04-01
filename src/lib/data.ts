
import { connectToDB } from "./connect";
import { User } from "./models";

export async function getUser(){
connectToDB(); 
const allUser = await User.find(); 
return allUser; 


}