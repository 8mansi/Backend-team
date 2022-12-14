const express=require('express') 
const router = express.Router() 
const bodyparser=require('body-parser') 
const Userprofile=require('../Controllers/UserController')
const Posts=require('../Controllers/PostsController')
router.use(bodyparser.urlencoded({extended:true})) 
router.use(bodyparser.json()) 
router.use("/Userprofile",Userprofile) 
router.use("/Posts",Posts) 
module.exports=router