const mongoose=require('mongoose');

const RentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    address:{
       type:String,
       required:true
    },
    contact:{
       type:Number,
       required:true
    },
    place:{
        type:String,
        required:true
    },
    minprice:{
        type:Number,
        required:true
    },
    description:{
         type:String
    },
    img:{
        type:String,
        required:true
    }


});

module.exports=mongoose.model("Rent",RentSchema)