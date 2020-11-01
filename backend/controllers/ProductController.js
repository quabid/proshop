import asyncHandler from 'express-async-handler';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: 'Product Controller' });
import Product from '../models/ProductModel.js';

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public
export const getProducts = asyncHandler(async (req, res) => {
  logger.info(`Route: /api/products vs Requested URL: ${req.url}`);
  const products = await Product.find({});

  res.status(200).json(products);
});

// @desc        Fetch product by ID
// @route       GET /api/product/id
// @access      Public
export const getProductById = asyncHandler(async (req, res) => {
  logger.info(`Route: /api/product/id vs Requested URL: ${req.url}`);
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found, Idiot!');
  }
});
