const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())
app.get("/hello", (req, res)=>{
console.log("in the server");
res.send("hello from server")
})
app.get("/user", (req, res)=>{
    console.log(req.query)
    // res.send(req.query)
    res.send(req.query.name)
})
app.get("/class/:student/:subject", (req, res)=>{
    console.log(req.params)
    console.log(req.params.student)
    console.log(req.params.subject)
    res.send(req.params)
})
app.post("/login",(req, res)=>{
    console.log("login request")
    body=req.body
    console.log(body)
    if((body.username==="Shabana") && (body.password==="2154532"))
    {
        console.log("authenticated")
        res.send("loggedin")
    }
    else{
        console.log("failed")
        res.send("failed")

    }
})
app.all("*", (req, res)=>{
    res.status(404).send("no such route")
})
app.listen(3001, ()=>{console.log("server started")})