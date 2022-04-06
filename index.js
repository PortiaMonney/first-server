const express =require("express");

const app =express();

app.get("/",(reg ,res)=>{
    res.send("hello Portia")

});

app.get("/greet",(reg ,res)=>{
    console.log("hello Portia")
});

app.listen(4000 ,()=>{
console.log("🙋‍♀️ server running")
});
