const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "mintu-files");
const organizedDir = path.join(__dirname, "output", "organized-files");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif"],
  documents: [".pdf", ".doc", ".docx"],
  videos: [".mp4", ".avi", ".mkv"],
  others: [],
};

const testFiles = ["photo.jpg", "report.pdf", "video.mp4", "notes.txt"];

function createTestFiles() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(
        path.join(sourceDir, file),
        `This is a test file named ${file}`,
      );
    });
  }
  console.log("Test files created successfully in the source directory.");
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}
// createTestFiles();

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  //   images: [".jpg", ".jpeg", ".png", ".gif"],
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return others
}
