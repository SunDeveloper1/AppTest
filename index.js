const express=require('express');




const app=express();



app.get('/',(req,res)=>{
    res.send("Express LocalHOST")
})
app.listen(PORT,(req,res)=>{
    
    console.log('express arrived at 3000')
})