const fs = require("fs");

//sync
// fs.writeFileSync("./text.txt","Hi Thow are u");

//Async
//fs.writeFile("./text.txt","Hi Thow are u Async",(err)=>{});

const result  = fs.readFileSync("./contant.txt","utf-8");
console.log(result);