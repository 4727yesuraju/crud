import path from 'path';
import express from "express";
import {config} from 'dotenv';
import { connectToDB } from "./db/connectToDB.js";
config();
import userRoute from './routers/user.routes.js'


const __dirname = path.resolve();
const app = express();

app.use(express.json());

app.use("/api/user",userRoute);

app.use(express.static(path.join(__dirname,"/client/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    connectToDB();
    console.log("Server is running on PORT : ",PORT)
})