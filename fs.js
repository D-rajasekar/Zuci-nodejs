const fs=require("fs")
const data=`Dream is not the thing you see in sleep but is that thing that doesn't let you sleep
            suffering is the essence of success!!!`;

fs.writeFile("names.txt",data,()=>console.log("completed writing"))
