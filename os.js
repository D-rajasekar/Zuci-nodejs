const os=require("os");
const num=1024;
 const convert=(n)=>`${(n/(num*num*num)).toFixed(2)} GB`;
 //1kb=1024 bytes
 //1MB=1024 1kb
 //1GB=1024 MB

 console.log("Free Memory",convert(os.freemem()));//free RAM
 console.log("Total Memory",convert(os.totalmem()));//total RAM
 console.log("Version",os.version());
 console.log("Processor",os.cpus());