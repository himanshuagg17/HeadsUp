const express=require("express");
const {connection}=require("./configs/db");
const { userRouter } = require("./routes/user.routes");


const app=express();
require("dotenv").config();

app.use("/",(req,res)=>{
    res.send(`<h4> This is the home page </h4>`)
})

app.use("/user",userRouter);

app.listen(process.env.port,async(req,res)=>{
    try{
      await connection;
      console.log(`The server is running at ${process.env.port}`)
    }
    catch(err){
        res.send(err.message);
    }
})