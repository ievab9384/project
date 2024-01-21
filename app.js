const express = require('express');
const cors = require('cors'); // Import the CORS middleware

const app = express();

// Use CORS middleware to enable CORS for all requests
app.use(cors());

// Your other middleware and route configurations
// ...

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
