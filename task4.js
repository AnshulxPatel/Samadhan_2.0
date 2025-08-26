// Import the http module
const http = require('http');

// Define the port number
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response
  res.end('Hello, World!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
