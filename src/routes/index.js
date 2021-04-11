const express = require("express")
const router = express.Router();



router.get('/' , (req , res)=>{ 
    res.render("index.html",{title: "First Website"})
})
router.get('/contact' , (req , res)=>{ 
    res.render("contact.html",{title: "Contact pages"})
})
router.get('/about' , (req , res)=>{ 
    res.render("about.html",{title: "About  pages"})
})


module.exports=router;