const http=require("http")
const server=http.createServer((req, res)=>{
    // console.log("inside server")
    // res.end("Hello from server")
    // console.log(req)
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
}
]

    if(req.url==="/view"){
        res.writeHead(200)
        res.end("username:surendra")
    }
    if(req.url==="/update"){
        res.writeHead(200)
        res.end("updated successfully")
    }
    if(req.url==="/details"){
        res.writeHead(200)
        res.end(JSON.stringify(data))
    }
    if(req.url==="/html"){
        res.writeHead(200)
        res.end("<h1>Hello World</h1>")
    }
    else{
        res.writeHead(404)
        res.end("Error 404 : Page Not Found")
    }
})
server.listen(3001, ()=>console.log("Server started"))