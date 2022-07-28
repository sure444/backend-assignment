const http=require("http")
const url=require("url")
const server=http.createServer((req, res)=>{
    const data=[
{
        "username":"surendra",
    "age":"20",
    "email":"surenyadav3154@gmail.com"
},
{
    "username":"sunny",
"age":"20",
"email":"sunny@gmail.com"
},
{
    "username":"Shabana",
"age":"19",
"email":"Shabana@gmail.com"
},
{
    "username":"Vishakha",
"age":"20",
"email":"Vishakha@gmail.com"
}
]
// GET method query
const parsedurl=url.parse(req.url, true)
const querydata=parsedurl.query.username
if(parsedurl.pathname==="/viewUser"){
    const result=data.find((item)=>item.username===querydata)
    res.end(JSON.stringify(result))
}
//-------------------------------------------

// POST method 
if(req.url==="/createUser" && req.method==="POST"){
  const redata=''
   req.on('data', (chunk)=>{
    reqdata=chunk.toString()

   })
   req.on('end', ()=>{
    data.push(JSON.parse(reqdata))
    console.log(data)

   })
   req.on('close', ()=>{
    console.log("Closed")
   })

   res.end(JSON.stringify(data))
}


})
server.listen(3002, ()=>console.log("Server Started"))
