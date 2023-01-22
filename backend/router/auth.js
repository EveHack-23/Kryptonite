const router=require("express").Router();
const User=require("../models/user");


router.post("/signup",async function(req,res){
    try{
        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(404).json(err);
    }
    
});

router.post('/login',async function(req,res){
    const user= await User.findOne({email:req.body.email})
    if(user){
        if(user.password==req.body.password){
            res.send({message: "Login Successfull", user: user})
        }
        else{
            res.send({ message: "Password didn't match"}) 
        }
    }
    else{
        res.send({message: "User not registered"}) 
    }
});

router.get("/get",async function(req,res){
    try{
        const Alluser= await User.find();
        res.status(200).json(Alluser);
    }
    catch{
        res.status(401).json(err);
    }
    
});

module.exports=router;