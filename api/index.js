import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';//we cannto use .env in backend directally
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config()//user.model';


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongoose");
})
.catch((err)=>{
    console.log(err);
})
const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("server is runnig on port :3000");
})


app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);


app.use((err,req,res,next)=>{
     const statuscode=err.statuscode||500;
     const message=err.message||"internal errror";
     return res.status(statuscode).json({
        success:false,
        statuscode,
        message
     })
})