'use strict';

const express = require('express');

// Constants
const PORT = 3002;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello All. This is my 1st Project in my DevOps Journey which will help me to understand how I can Dockerize a Node.js application and host it in EC2 instance');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
