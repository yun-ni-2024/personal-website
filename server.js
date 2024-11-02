const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Specify your desired port

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
