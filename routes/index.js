const express = require("express");
const userRoutes=require("./users");
const postRoutes=require("./posts");
require("dotenv").config();
const router = express.Router();


module.exports =( ) =>{
    router.use("/users",userRoutes());
    router.use("/posts",postRoutes());
    return router;

}