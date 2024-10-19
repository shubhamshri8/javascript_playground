const net = require('net');

// Host and Port
const HOST = 'localhost';
const PORT = 8081;

// Handle connection with the client
function connectToClient(socket) {
  console.log('Connection established');

  // Receiving data from client
  socket.on('data', (data) => {
    console.log(`DATA from client: ${data.toString()}`);
    
    // Simulate delay like `time.sleep(10)` in Python
    setTimeout(() => {
      // Sending response back to the client
      socket.write('Thanks for interacting with me!');
      socket.end();
    }, 10000); // 10 seconds delay
  });

  socket.on('end', () => {
    console.log('Connection closed');
  });
}

console.log('Starting the server ...');

// Create server and listen for connections
const server = net.createServer(connectToClient);

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${PORT}`);
});
