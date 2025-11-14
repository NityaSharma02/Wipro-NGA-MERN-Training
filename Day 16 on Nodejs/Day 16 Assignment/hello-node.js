// Node.js version 
console.log("Node.js version:", process.version)

// Current file and directory

console.log("Current file:", __filename);
console.log("Current Directory:", __dirname);

// A welcome message printed every 3 seconds (using setInterval)
const greet = setInterval(() => {
    console.log("Welcome to Node.js")
}, 3000);


// stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(greet);
    console.log("Time stopped after 10 seconds.")
}, 10000);