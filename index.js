const express=require("express");
const morgan=require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const app=express();
app.use(morgan("combined"))
PORT=3005;
app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002/',changeOrigin:true}));
app.get("/home",(req,res)=>{
    return res.json({
        message:"Hello World"
    })
})
app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});