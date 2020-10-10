import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import chalk from 'chalk';
import { customAlphabet } from 'nanoid';
import ProductRoutes from './routes/ProductRoutes.js';

dotenv.config();
connectDB();

const nanoid = customAlphabet('02468ouqtyminv', 13);
const PORT = process.env.PORT || 5000;
const app = express();
app.use((req, res, next) => {
  res.type('json');

  res.set({
    'Content-Type': 'application/json',
    'Content-Length': '123',
    'x-powered-by': 'Deez Nuts!@$?%&#',
    'Cache-control': 'no-cache,no-store,max-age=0,must-revalidate',
    'X-XSS-Protection': '1;mode=block',
    'X-Content-Type-Options': 'nosniff',
    ETag: nanoid(),
  });

  res.setHeader('Cache-Control', 'no-cache,no-store,max-age=0,must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('X-XSS-Protection', '1;mode=block');
  // res.setHeader('Content-Type', 'text/json; charset=utf-8');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Content-Security-Policy', "script-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.get('/', (req, res) => {
  res.status(200).send(`API is running`);
});

app.use('/api/products', ProductRoutes);

app.listen(PORT, () => {
  console.clear();
  console.log(
    chalk.keyword('orange')(
      `\n\t\tServer started in ${process.env.NODE_ENV} mode on port 5000\n`
    )
  );
});

export default app;
