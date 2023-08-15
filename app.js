const fs = require("fs");

const folderName = "test";

try {
  if (fs.existsSync(folderName)) console.log("Folder already exists");
  else {
    fs.mkdirSync(folderName);
    console.log(`Created a folder named ${folderName}`);
  }
} catch (error) {
  console.error(error);
}
