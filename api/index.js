import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';//we cannto use .env in backend directally
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongoose");
})
.catch((err)=>{
    console.log(err);
})
const app=express();

app.listen(3000,()=>{
    console.log("server is runnig on port :3000");
})
