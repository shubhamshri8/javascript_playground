const net = require('net');

// Host and Port of the server
const HOST = 'localhost';
const PORT = 8081;

// Create a client socket and connect to the server
const client2 = new net.Socket();

client2.connect(PORT, HOST, () => {
  console.log('Connected to the server');
  
  // Sending different data to the server
  client2.write('Holaaa from client 2');
});

// Receive data from the server
client2.on('data', (data) => {
  console.log('Received from server:', data.toString());
  client2.destroy(); // Close the connection
});

// Handle connection closure
client2.on('close', () => {
  console.log('Connection closed');
});
