const fs = require("fs");

const content1 = "This is a content of the file.\n node js";

try{
    fs.writeFileSync("./output/file1.txt", content1);
    console.log("File written successfully.");
}catch(err){
    console.error("Error writing file:", err.message);
}

const content2 = "This is another content of the file.\n node js";

fs.writeFile("./output/file2.txt", content2, (err) => {
    if (err) {
        console.error("Error writing file:", err.message);
    }
    else{
        console.log("File written successfully.");
    }
});