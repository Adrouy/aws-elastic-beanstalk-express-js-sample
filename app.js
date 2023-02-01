const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi, my name is Adro and I want and I am going to be a DevOps Engineer. Hi again'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
