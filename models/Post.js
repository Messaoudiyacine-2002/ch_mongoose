const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Title:{
        type : String,
        required:true,
    },
    Body:{
        type : String,
        required:true,
    },
    Category:{
        type : String,
        required:true,
    },
    Image:{
        type : String,
        required:true,
    },
    
    createdAt:{
        type:Date,
        default: Date.now(),
    }

});

const Post = mongoose.model("Post",userSchema);

module.exports = Post;