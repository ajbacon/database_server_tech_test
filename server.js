const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    secret: 'inpsector_gadget',
    resave: false,
    saveUninitialized: false
  })
);

app.get('/', (req, res) => res.send('API Running'));

app.get('/set', (req, res) => {
  req.session.data = req.query;
  res.send('set data');
});

app.get('/get', (req, res) => {
  if (req.session.data != null) {
    res.send(req.session.data[req.query.key]);
  }
  res.end();
});

module.exports = app;
