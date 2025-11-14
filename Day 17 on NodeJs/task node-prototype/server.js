const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

// Route handling
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Welcome to Node.js Server`);

  } 
  else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is a simple NodeJs prototype server.');

  } 
  else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Contact us at: contactsupport@gmail.com');

  } 
  else {
    // unknown routes
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found')
  };
});


// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});