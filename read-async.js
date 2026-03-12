const fs = require("fs");
console.log("Start reading file...");

fs.readFile("./data/diary.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
  }
  console.log("file content");
  console.log(data);
});

console.log("finished");
