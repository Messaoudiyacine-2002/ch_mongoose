const express = require("express");
const Usercontroller= require("../../controllers/UserController")
const router = express.Router();


module.exports =( ) =>{
    //get all users
    router.get("/", Usercontroller.getAllUsers);

    //add one user
    router.post("/", Usercontroller.addOneUser);

    //get one user
    router.get("/:id", Usercontroller.getUserById);

    //update one user
    router.put("/", Usercontroller.updateUserById);

    //delete one user
    router.delete("/:id", Usercontroller.deleteUser);
    return router;

}