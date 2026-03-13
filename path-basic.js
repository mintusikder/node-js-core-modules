const path = require('path');

console.log("Current file info: /n");
console.log("File name:",__filename);
console.log("Directory name:",__dirname); 

console.log("\n"+"-".repeat(30)+"\n");

const filePath = "/mintu/documents/nodejs/path-basic.js";
console.log("Base name:",filePath , "\n"); 
console.log(path.dirname(filePath), "\n");
console.log(path.basename(filePath), "\n");
console.log(path.extname(filePath), "\n"); 
console.log("File name without extension:", path.basename(filePath, path.extname(filePath)), "\n");

console.log("\n"+"-".repeat(30)+"\n");

const parsedPath = path.parse(filePath);
console.log("Parsed path:", parsedPath);
console.log("\n"+"-".repeat(30)+"\n");
console.log("formated path:", path.format(parsedPath)); 