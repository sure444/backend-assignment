const fs=require("fs")

//=======Read file sync
 console.log(fs.readFileSync("./file1.txt","utf-8" ))

//=======Write file sync
fs.writeFileSync("./file1.txt", "Hello World this is file write data")
const data="Hello   this dummy data for file write sync "
fs.writeFileSync("./file2.docx", data)

//=======Append data to a file
fs.appendFileSync("./file2.docx", "This is appended data \n use '\n'  for line break")


//======File read async
fs.readFile("./file2.docx", 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
    }
    else if(data){
        console.log(data)
       
    }
})
console.log("statement 2")

//======File write async
fs.writeFile("./file3.docx", "this async write file data####", (err)=>{
    if(err){
    console.log(err)
    }
})

//=====Append file sync
fs.appendFile("./file1.txt", "\n This data is appended by async append method", (err)=>{
    if(err){
        console.log(err)
    }
})
