const app=require('./app');
const connectDB = require('./config/connectDb');
require("dotenv").config({path:'backend/.env'});


//Connect DATABASE
connectDB()



const server=app.listen(process.env.PORT,()=>{

    console.log(`Server is Running on http://localhost:${process.env.PORT}`);
});

