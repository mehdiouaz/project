const express = require ("express");

const {post,getPost} = require("../controllers/post");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router=express.Router();

router.post("/addPost",authMiddleware,post);
router.get("/getPost",getPost);


module.exports=router; 