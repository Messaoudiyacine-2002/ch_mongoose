const Post = require("../models/Post");

exports.getAllPosts = async(req,res)=>{
    try{
        const Posts = await Posts.find();

        res.status(200).send(Posts);

        
    }catch(err){
        res.status(500).send(err.message);
    }
}

exports.AddOnePost = async(req,res)=>{
    try{
       
    }catch(err){
        res.status(500).send(err.message);
    }
}

exports.getOnePost = async(req,res)=>{
    try{
       
    }catch(err){
        res.status(500).send(err.message);
    }
}
exports.updatePost = async(req,res)=>{
    try{
   
        
    }catch(err){
        res.status(500).send(err.message);
    }
}

exports.deletePost= async(req,res)=>{
    try{
  
    }catch(err){
        res.status(500).send(err.message);
    }
}