const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

app.get('/set', (req, res) => {
  res.send({ data: req.query });
});

module.exports = app;
