const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken"); 
const { body, validationResult } = require('express-validator');

exports.register= async(req,res)=>{

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const{fullname,password,email}=req.body;

        const existUser= await User.findOne({email:email});

        if(existUser) res.status(400).json({message:"you have an account"});
    
        const cryptPassword = await bcrypt.hash(password,12);
    
        const newuser=new User({fullname,password:cryptPassword,email});
    
        const user= await newuser.save(); 

        const token = jwt.sign({email:email,id: user._id},'secretcode',{
            expiresIn:"2h",
        });
        
        res.status(200).json({user , token});
    } catch (error) {
        
        res.status(500).json({message: `something went wrong ${error}` });
    }

    
};
