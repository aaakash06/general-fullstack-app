"use server"

const mongoose = require('mongoose' )
import { connect } from 'mongoose';

export async function connectToDB(){
  console.log('trying to connect to DB')

  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB');
    return;  
} 
 else{
  try {
    // Initialize Mongoose
    await connect(process.env.DB!);

    console.log('Connected to MongoDB');

  } catch(err) {
    console.error("Couldn't connect to DB:", err);
  }


 } 
}
  