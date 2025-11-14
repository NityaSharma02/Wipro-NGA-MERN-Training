const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("userLoggedIn", (username) => {
    console.log(`User ${username} logged in.`);
    
});

eventEmitter.on("userLoggedOut", (username) => {
    console.log(`User ${username} logged out.`);
    
});

eventEmitter.on("sessionExpired", (username) => {
    console.log(`Session for ${username} has expired.`);
    
});

const username = 'Nitya';

eventEmitter.emit("userLoggedIn", username);
eventEmitter.emit("userLoggedOut", username);

setTimeout(() => {
    eventEmitter.emit("sessionExpired", username)
}, 5000);