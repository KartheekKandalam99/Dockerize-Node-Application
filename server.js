'use strict';

const express = require('express');

// Constants
const PORT = 3002;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello All. This is my 1st Project in my DevOps Journey which will help me to Build and Deploy Node.js Application using Docker + GitHub Actions + AWS EC2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
