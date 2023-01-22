const router=require("express").Router();
const Connect=require("../models/connect");

router.post("/",async function(req,res){
    const newconnect=new Connect(req.body);
    try{
        const connect=await newconnect.save();
        res.status(201).json(connect);
     } 
    catch(err){
        res.status(401).json(err);
    }
});

router.get("/get",async function(req,res){
    try{
        const Allconnect= await Connect.find();
        res.status(200).json(Allconnect);
    }
    catch{
        res.status(401).json(err);
    }
    
});


router.get("/getmeat",async function(req,res){
    try{
        const Allmeat=await Connect.find({typeofowner:"meat"})
        res.status(200).json(Allmeat);
    }
    catch(err){
        res.status(401).json(err);
    }
})

router.get("/getcattle",async function(req,res){
    try{
        const Allmeat=await Connect.find({typeofowner:"meat"})
        res.status(200).json(Allmeat);
    }
    catch(err){
        res.status(401).json(err);
    }
})

module.exports=router;