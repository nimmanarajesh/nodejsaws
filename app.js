const express = require('express');
const app = express();
const PORT = 3000;
const IP = '0.0.0.0';

app.get('/home', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>JavaScript Fundamentals – Part 1</title>
        <style>
            body {
                height: 100vh;
                display: flex;
                align-items: center;
                background: linear-gradient(to top left, #28b487, #7dd56f);
            }
            
            h1 {
                font-family: sans-serif;
                font-size: 50px;
                line-height: 1.3;
                width: 100%;
                padding: 30px;
                text-align: center;
                color: white;
            }
        </style>
    </head>
    
    <body>
        <h1>JavaScript Fundamentals – Part 1</h1>
    
        </body>
    
    </html>`);
});

app.listen(PORT, IP);
console.log(`Application is up and running on http://${IP}:${PORT}`);