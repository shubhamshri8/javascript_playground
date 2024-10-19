const net = require('net');

// Host and Port of the server
const HOST = 'localhost';
const PORT = 8081;

// Create a client socket and connect to the server
const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to the server');
  
  // Sending data to the server
  client.write('Hello, world!');
});

// Receive data from the server
client.on('data', (data) => {
  console.log('Received from server:', data.toString());
  client.destroy(); // Close the connection
});

// Handle connection closure
client.on('close', () => {
  console.log('Connection closed');
});
