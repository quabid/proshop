import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import chalk from 'chalk';
import ProductRoutes from './routes/ProductRoutes.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`API is running`);
});

app.use('/products', ProductRoutes);

app.listen(PORT, () => {
  console.clear();
  console.log(
    chalk.keyword('orange')(
      `\n\t\tServer started in ${process.env.NODE_ENV} mode on port 5000\n`
    )
  );
});

export default app;
