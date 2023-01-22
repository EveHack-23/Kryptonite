const mongoose=require('mongoose');

const labourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    worker:{
        type:Number,
        required:true
    },
    img:{
       type:String,
       required:true
    },
    offdays:{
        type:Array,
        default:0
    }
});
module.exports=mongoose.model("Labour",labourSchema)