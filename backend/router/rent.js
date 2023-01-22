const router=require("express").Router();
const Rent=require("../models/rent");

router.post("/",async function(req,res){
    const newRent=new Rent(req.body);
    try{
        const rent=await newRent.save();
        res.status(201).json(rent);
     } 
    catch(err){
        res.status(401).json(err);
    }
});

//get all
router.get("/get",async function(req,res){
    try{
        const AllRent= await Rent.find();
        res.status(200).json(AllRent);
    }
    catch(err){
        res.status(401).json(err);
    }
    
});



router.get("/getby",async function(req,res){
    var place=req.query.places;
    try{
       var places=await Rent.find({place:place});
       res.status(201).json(places);
    }
    catch(err){
       res.status(401).json(err);
    }
    
})
module.exports=router;