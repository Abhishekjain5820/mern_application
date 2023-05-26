require("dotenv").config()
const express=require('express');
const app=express();
const port=8003;
const mongoose=require('mongoose')
require('./db/Conn')
const users=require('./models/userSchema')
const cors=require('cors');
const router=require('./routes/router')

//for taking data from frontend
app.use(cors());
//for taking json datat
app.use(express.json())

//to use router 
app.use(router);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
