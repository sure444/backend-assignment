const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
const parsedUrl=url.parse(req.url, true)
const queryData=parsedUrl.query
const pi=3.14
const r=queryData.radius
if(parsedUrl.pathname==="/metrics"){
    if(queryData.object==="circle" && queryData.metric==="area"){
        res.writeHead(200)
        res.end(areaOfCircle(r))
    }
    else if(queryData.object==="sphere" && queryData.metric==="volume"){
        res.writeHead(200)
        res.end(volumeOfSphere(r))
    }
    else if(queryData.object==="sphere" && queryData.metric==="surfaceArea"){
        res.writeHead(200)
        res.end(surfaceAreaOfSphere(r))
    }


}else{
    res.writeHead(404)
    res.end("Route not found")
}

function areaOfCircle(r){
    let a=pi*r*r
    return("Area Of Circle is " +a)
}
function volumeOfSphere(r){
    let v=(4/3)*(pi*r*r*r)
    return("Volume of sphere is "+v)
}
function surfaceAreaOfSphere(r){
    let A=4*pi*r*r
    return("Surface area of sphere is ")
}

})
server.listen(8080,()=>{console.log("Server Started")})