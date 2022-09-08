const http=require("http")
const url=require("url")
const server=http.createServer((req, res)=>{
    const parsedUrl=url.parse(req.url, true)
    const queryData=parsedUrl.query
    if(parsedUrl.pathname==="/age"){
       const today=new Date()
      const m=today.getMonth()+1
       const dob=queryData.month+"/"+queryData.date+"/"+queryData.year
       const todayDate=m+"/"+today.getDay()+"/"+today.getFullYear()
    //    console.log(dob)
    //    console.log(todayDate)
    const age=calculateAge(dob, todayDate)
        res.writeHead(200)
        res.end("<p>Hello "+queryData.name+"</p><p>You are currently "+age+" years old</p>")
    }
    else{
         res.writeHead(404)
         res.end("Route not found")
    }

})
server.listen(8080, ()=>{console.log("Server Started")})

function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}