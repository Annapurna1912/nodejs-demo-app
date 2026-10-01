const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello! Node.js CI/CD Demo App is running.");
});

app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});