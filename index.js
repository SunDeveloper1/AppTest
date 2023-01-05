const express=require('express');

const PORT=process.env.PORT || 3000


const app=express();



app.get('/',(req,res)=>{
    res.send("Express LocalHOST")
})
app.listen(PORT,(req,res)=>{
    
    console.log('express arrived at 3000')
})
