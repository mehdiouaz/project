const express = require ("express");
const {register} = require("../controllers/register");
const {login} = require("../controllers/login");
const { validateUser } = require("../middlewares/validateUser");
const router=express.Router();

router.post("/addUser",validateUser,register);
router.post("/signin",login);

module.exports=router; 