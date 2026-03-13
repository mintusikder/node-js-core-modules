const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "This is a temporary file that will be deleted.\n");
console.log("Temporary file written successfully.");


if (fs.existsSync("./output/temp.txt")) {
    try {
        fs.unlinkSync("./output/temp.txt");
        console.log("File deleted successfully.");
    } catch (err) {
        console.error("Error deleting file:", err.message);
    }
} else {
    console.log("File does not exist.");
}

fs.writeFile("./output/temp-async.txt", "This is another temporary file that will be deleted.\n", (err) => {
    if (err) {
        console.error("Error writing file:", err.message);
        return;
    }
    console.log("Async file written successfully.");
    if (fs.existsSync("./output/temp-async.txt")) {
        try {
            fs.unlinkSync("./output/temp-async.txt");
            console.log("Async file deleted successfully.");
        } catch (err) {
            console.error("Error deleting async file:", err.message);
        }
    } else {
        console.log("Async file does not exist.");
    }
});