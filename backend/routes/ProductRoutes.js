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
    Product.findById(req.params.id)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res
          .status(404)
          .json({ error: `Product ID ${req.params.id} Not Found` });
      });
  })
);

export default router;
