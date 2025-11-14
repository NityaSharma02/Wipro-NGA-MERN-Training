const moment = require('moment');

// get name from CLI
const name = process.argv[2];

// handle case if no name provide
if (!name) {
    console.log("Please provide your name.")
    process.exit()
}

// get current date and Time
const now = moment().format("ddd MMM D YYYY, h:mm A")


// print greeting
console.log(`Hello, ${name}! Today is ${now}.`);