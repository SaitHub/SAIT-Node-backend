const express=require("express")
const app=express()
const router= express.Router();
const path =require("path")

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","index.html"));
})
router.get("*.html*",(req,res)=>{
    let filename
    if(req.url.endsWith(".html")){
        filename= req.url.substring(req.url.lastIndexOf('/'))
    }
    else{
        filename= req.url.substring(req.url.lastIndexOf('/'),req.url.lastIndexOf('?'))
    }
    res.sendFile(path.join(__dirname,"..","public",filename));
})
router.get("*.js",(req,res)=>{
    let filename= req.url.substring(req.url.lastIndexOf('/'))
    res.sendFile(path.join(__dirname,"..","public","scripts",filename));
})
router.get("*.jpg",(req,res)=>{
    let filename= req.url.substring(req.url.lastIndexOf('/'))
    res.sendFile(path.join(__dirname,"..","public","images",filename));
})
router.get("*.png",(req,res)=>{
    let filename= req.url.substring(req.url.lastIndexOf('/'))
    res.sendFile(path.join(__dirname,"..","public","images",filename));
})
router.get("*.css",(req,res)=>{
    let filename= req.url.substring(req.url.lastIndexOf('/'))
    res.sendFile(path.join(__dirname,"..","public","styles",filename));
})


module.exports=router