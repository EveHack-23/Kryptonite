const router=require("express").Router();
const Labour=require("../models/labour")

//create user
router.post("/",async function(req,res){
    const newlabour=new Labour(req.body);
    try{
        const labour=await newlabour.save();
        res.status(201).json(labour);
     } 
    catch(err){
        res.status(401).json(err);
    }
});

//get all
router.get("/get",async function(req,res){
    try{
        const Alllabour= await Labour.find();
        res.status(200).json(Alllabour);
    }
    catch{
        res.status(401).json(err);
    }
    
});

router.get("/getby",async function(req,res){
    var place=req.query.places;
    try{
       var places=await Labour.find({place:place});
       res.status(201).json(places);
    }
    catch(err){
       res.status(401).json(err);
    }
    
})
module.exports=router;