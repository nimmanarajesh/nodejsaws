const express = require('express');
const app = express();
const PORT = 8080;
const IP = '0.0.0.0';

app.get('/home', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, IP);
console.log(`Application is up and running on http://${IP}:${PORT}`);