const express=require("express")
const app=express()
const fs=require("fs")
const bp=require("body-parser")
app.use(bp.json())
app.post("/student/add", (req,res)=>{
       body=req.body
       fs.appendFile("student.json", JSON.stringify(body), err => {
              if (err) 
              {
                     throw err
              }
              else{
                     res.status(200).send({
                            "result": "Success"
                           })
              }
             
              
          })
})
app.get("/student/getDetails", (req,res)=>{
       fs.readFile("./student.json", 'utf-8', (err, data)=>{
              if(err){
                  console.log(err)
              }
              else if(data){
                 res.status(200).send(data)
                 
              }
          })
       
})
app.all("*", (req, res)=>{
       res.status(404).send("route not found")
})
app.listen(8080, ()=>{console.log("Server Started")})