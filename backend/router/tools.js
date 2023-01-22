const router=require('express').Router();
const Tool=require("../models/tools");

//create user
router.post("/",async function(req,res){
    const newTool=new Tool(req.body);
    try{
        const tool=await newTool.save();
        res.status(201).json(tool);
     } 
    catch(err){
        res.status(401).json(err);
    }
});

//get all
router.get("/get",async function(req,res){
    try{
        const Alltool= await Tool.find();
        res.status(200).json(Alltool);
    }
    catch{
        res.status(401).json(err);
    }
    
});

router.get("/getby",async function(req,res){
     var tool=req.query.tools;
     
     try{
        var tools=await Tool.find({tool:tool});
        res.status(201).json(tools);
     }
     catch(err){
        res.status(401).json(err);
     }
     
})
module.exports=router;