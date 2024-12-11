const express = require('express');
const app = express();  // Initialize the Express application

const PORT = 3100;
// Define a route (for example, the home route)
app.get('/get', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
