/* const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');
dotenv.config();
const app = express();
const products = require('./data/products'); */
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import chalk from 'chalk';

dotenv.config();
connectDB();
import products from './data/products.js';
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`API is running`);
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id) || null;

  product === null
    ? res.status(200).send(`Product ID ${req.params.id} Not Found`)
    : res.status(200).json(product);
});

app.listen(PORT, () => {
  console.clear();
  console.log(
    chalk.keyword('orange')(
      `\n\t\tServer started in ${process.env.NODE_ENV} mode on port 5000\n`
    )
  );
});

export default app;
