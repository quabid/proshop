import express from 'express';
const router = express.Router();
import { UserControllers } from '../controllers/index.js';
import { protect } from '../middleware/AuthMiddleware.js';

//  @route     GET /api/products
router.route('/login').post(UserControllers.authUser);

router.route('/profile').get(protect, UserControllers.getUserProfile);

export default router;
