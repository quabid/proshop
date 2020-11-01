import express from 'express';
const router = express.Router();
import { ProductControllers } from '../controllers/index.js';

//  @route     GET /api/products
router.route('/').get(ProductControllers.getProducts);

//  @route     GET /api/products/id
router.route('/:id').get(ProductControllers.getProductById);

export default router;
