const mongoose =require("mongoose")

const productModle=new mongoose.Schema({
    name:{
        type:String,
        require
    },
    discription:{
        type:String,
        require
    },
    price:{
        type:String,
        require
    },
})
module.exports=mongoose.model("Product",productModle)