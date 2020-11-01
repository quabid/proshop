import asyncHandler from 'express-async-handler';
import bunyan from 'bunyan';
const logger = bunyan.createLogger({ name: 'User Controller' });
import User from '../models/UserModel.js';
import { generateToken } from '../custom_modules/index.js';

// @desc        Auth user and get token
// @route       POST /api/users/login
// @access      Public
export const authUser = asyncHandler(async (req, res) => {
  logger.info(`Route: /api/users/login vs Requested URL: ${req.url}`);
  const { email, password } = req.body;

  const user = await User.findOne({ email: `${email}` });

  // @ts-ignore
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      // @ts-ignore
      _id: user._id,
      // @ts-ignore
      name: user.name,
      // @ts-ignore
      email: user.email,
      // @ts-ignore
      isAdmin: user.isAdmin || false,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

// @desc        Get user profile
// @route       GET /api/users/profile
// @access      Private
export const getUserProfile = asyncHandler(async (req, res) => {
  logger.info(`Route: /api/users/profile vs Requested URL: ${req.url}`);
  // @ts-ignore
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      // @ts-ignore
      name: user.name,
      // @ts-ignore
      email: user.email,
      // @ts-ignore
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
