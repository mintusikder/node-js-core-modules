const fs = require("fs");

console.log("Start reading file...");
try {
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error("Error reading file:", err.message);
}
console.log("Finished reading file.");