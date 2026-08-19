const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static('public'));

// Display the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});