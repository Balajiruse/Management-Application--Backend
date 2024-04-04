import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./db.js";
import { Router } from "./Router/index.js";

//configuring dotenv
dotenv.config();

//initializing port
const PORT=process.env.PORT;

//initializing server
const app=express();

//middlewares

app.use(cors());
app.use(express.json());

//connecting database
dbConnect();

//adding router
app.use("/",Router);

//listening to the server

app.listen(PORT,()=>console.log("server started in PORT : "+PORT));