const User= require("../models/User");

exports.getAllUsers = async(req,res)=>{
    try{
        const users = await User.find();

        res.status(200).send(users);

        
    }catch(err){
        res.status(500).send(err.message);
    }
}
//##########

exports.getUserById = async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id});
        if(!user){
            res.status(404).send("user not found");
        }
        res.status(200).send(user);
        
    }catch(err){
        res.status(500).send(err.message);
    }
}
//####

exports.addOneUser = async(req,res)=>{
    try{
        const {firstName,lastName,profession,company} = req.body;
        if (!(firstName&&lastName&&profession&&company)){
            return res.status(400).send("all input are required ");
        }
        
        // save user 
        const savedUser = await User.create({
            firstName,
            lastName,
            profession, 
            company,
        });

        res.status(201).json({msg:"user created",data: savedUser});
    }catch(err){
        res.status(500).send(err.message);
    }
}
exports.updateUserById = async(req,res)=>{
    try{
        const updateUser = await User.findOneAndUpdate (
            {_id:req.params.id},req.body, {new: true, useFindAndModify: false}
        );
        res.status(201).json({msg:"user updated",data: updateUser});
      
        
        
    }catch(err){
        res.status(500).send(err.message);
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id});
        res.status(200).send("user delete ");
        
        
    }catch(err){
        res.status(500).send(err.message);
    }
}