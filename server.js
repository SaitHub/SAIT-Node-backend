const express = require("express")
const app = express()
const PORT = process.env.PORT||3500;
const router=require("./routes/route")
app.use(express.urlencoded())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.url);
    next();
})
app.use(router);

app.listen(PORT,()=>{
    console.log("server is running !");
})