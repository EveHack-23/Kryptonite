const mongoose=require('mongoose');

const connectSchema=new mongoose.Schema({
   name:{
      type:String,
      required:true
   },
   contact:{
    type:Number,
    required:true
   },
   address:{
      type:String,
      required:true
   },
   typeofowner:{
       type:String,
       required:true
   },
   desc:{
     type:String,
     required:true
   },
   img:{
     type:String,
     required:true
   }

});

module.exports=mongoose.model("Connect",connectSchema)