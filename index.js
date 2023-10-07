const express=require("express");
const morgan=require("morgan");
const app=express();
app.use(morgan("combined"))
PORT=3005;
app.get("/home",(req,res)=>{
    return res.json({
        message:"Hello World"
    })
})
app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});