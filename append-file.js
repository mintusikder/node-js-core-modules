const fs = require("fs");

fs.writeFileSync(
  "./output/app.log",
  "This is a content of the file.\n",
);
console.log("File written successfully.");
const logEntry1 = `${new Date().toISOString()} - This is a log entry.\n`;
fs.appendFileSync("./output/app.log", logEntry1);
console.log("Log entry appended successfully.");

const logEntry2 = `${new Date().toISOString()} - This is another log entry.\n`;
fs.appendFile("./output/app.log", logEntry2, (err) => {
  if (err) {
    console.error("Error appending to file:", err.message);
  } else {
    console.log("Log entry appended successfully.");
  }
});
