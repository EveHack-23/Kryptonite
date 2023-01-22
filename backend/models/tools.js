const mongoose=require('mongoose');

const toolSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tool:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    price:{
       type:Number,
       required:true
    },
    number:{
        type:Number,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    img:{
        type:String
        
    },
    for:{
      type:String,
      required:true  
    }
});
module.exports=mongoose.model("Tools",toolSchema)
