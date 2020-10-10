import express from 'express';
import asyncHandler from 'express-async-handler';
import stringify from 'fast-safe-stringify';
const router = express.Router();
import Product from '../models/ProductModel.js';

//  @desc      Fetch all products
//  @route     GET /api/products
//  @access    Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.status(200).json(products);
  })
);

//  @desc      Fetch a single product
//  @route     GET /api/products/id
//  @access    Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  })
);

export default router;
