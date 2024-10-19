const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

const port = 5700

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes

// Listeners

server.listen(port, () => {
  console.log(`listening on *:${port}`)
});