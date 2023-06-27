const express=require('express')
const cors=require("cors")

const app=express()

app.use(cors());
app.use(express.json({limit:'50mb'}))

const product =require("./routes/productRoutes")

app.use("/api/v1",product)




module.exports=app;