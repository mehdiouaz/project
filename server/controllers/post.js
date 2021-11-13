const Post = require('../models/postSchema');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken"); 

exports.post= async(req,res)=>{

    try {
        const{desc,title,img}=req.body;

        const newpost =new Post({desc,title,img,owner:req.userId});
    
        const post= await newpost.save(); 
        
        res.status(200).json({post});
    } catch (error) {
        
        res.status(500).json({message: `something went wrong ${error}` });
    }

    
};


exports.getPost = async(req,res)=>{

    try {
    const posts = await Post.find({}).populate('owner')
    res.statuts(200).json(posts)
    } catch (error) {
        
        res.status(500).json({message: `something went wrong ${error}` });
    }

    
};
