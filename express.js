const express =require('express')
const app=express()

app.get("/",(req,res) =>{
    res.send('server is up and running')
})

app.listen(3000,() =>{
    console.log("server is up and running")
})