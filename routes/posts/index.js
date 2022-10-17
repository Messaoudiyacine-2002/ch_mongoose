const express = require("express");
const PostController= require("../../controllers/PostController")
const router = express.Router();


module.exports =( ) =>{

    
     router.get("/", PostController.getAllPosts);

    
     router.post("/", PostController.AddOnePost);
 
   
     router.get("/:id", PostController.getUserById);
 
    
     router.put("/", PostController.updatePost);
 
     
     router.delete("/:id", PostController.deletePost);

    return router;

}