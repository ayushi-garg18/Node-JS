// CORE MODULES 
// ********************************************************************
// 1. File System
// ********************************************************************

// const fs = require("fs");

// fs.writeFileSync("read.txt","Welcome to node js");

// fs.writeFileSync("read.txt","Hi!");

// fs.appendFileSync("read.txt"," Welcome to my tutorial series");

// const bufData = fs.readFileSync("read.txt");
// console.log(bufData);
 
// myData = bufData.toString();
// console.log(myData);

// fs.renameSync("read.txt","read&write.txt");

// --------------------------------------------------------------------

// const fs = require("fs");
// fs.writeFileSync("bio.txt","hello");
// fs.appendFileSync("bio.txt"," Ayushi");
// const myData = fs.readFileSync("bio.txt","utf-8");
// console.log(myData);
// fs.renameSync("bio.txt","myBio.txt");
// fs.unlinkSync("myBio.txt");

// --------------------------------------------------------------------

// const fs = require("fs");

// fs.writeFile("bio.txt","Hi ",(err)=>{
//     console.log(err);
// });

// fs.appendFile("bio.txt","Ayushi",(err)=>{
//     console.log(err);
// });

// fs.readFile("bio.txt","utf-8",(err,data)=>{
//     console.log(data);
// })

// --------------------------------------------------------------------

// const fs = require("fs");
// fs.writeFile("text.txt","Hello ",(err)=>{
//     console.log("File created successfully");
// });
// fs.appendFile("text.txt","Ayushi",(err)=>{
//     console.log("Data appended");
// });
// fs.readFile("text.txt","utf-8",(err,data)=>{
//     console.log(data);
// });
// fs.rename("text.txt","myText.txt",(err)=>{
//     console.log("File name changed successfully");
// });
// fs.unlink("myText.txt",(err)=>{
//     console.log("file deleted");
// });

// **********************************************************************
// 2. Operating System
// ********************************************************************

// const os = require("os");

// console.log(os.arch());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

// ********************************************************************
// 3. 
// ********************************************************************
