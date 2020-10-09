const express = require('express');
const app = express();
const products = require('./data/products');
const { SERVER_STATUS } = require('../constants');

app.get('/', (req, res) => {
  res.status(200).send(`API is running`);
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.status(200).json(product);
});

app.listen(5000, SERVER_STATUS);

module.exports = app;
