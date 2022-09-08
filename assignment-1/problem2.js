const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/vegetables"){
        fs.readFile("./vegetables.json", 'utf-8', (err, data)=>{
            if(err){
                console.log(err)
            }
            else if(data){
                res.end(data)
                
               
            }
        })
         
    }else{
    res.writeHead(404)
    res.end("Route not found")
}

})
server.listen(8080, ()=>{console.log("Server Started")})