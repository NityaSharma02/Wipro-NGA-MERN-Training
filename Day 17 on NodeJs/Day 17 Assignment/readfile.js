const fs = require('fs').promises;
const filePath = "feedback.txt"
const userInput = "Node.js is awesome!"

async function readFileFeedback() {
    try {
        await fs.writeFile(filePath, userInput);
        console.log("Data written successfully.")

        // Read the file Content
        console.log("Reading file...");
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    }   catch (error) {
        console.error('Error:', error);
    }
}

readFileFeedback();
