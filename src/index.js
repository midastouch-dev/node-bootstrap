const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Host and Port
const host = process.env.host;
const port = process.env.port;

const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON body
app.use(bodyParser.json());

// Run Server
const server = app.listen(port, host, () => {
  console.log(`Running server on http://${host}:${port}`);
});

app.post('/post', (req, res) => {
  return res.sendStatus(200);
});
