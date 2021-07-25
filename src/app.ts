import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

import userRoutes from './routes/user';
import { errorHandler } from './middleware/error';

const PORT = 5000;
const app = express();

app.use(express.json());

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 200,
});
app.use(limiter);

app.use('/api/v1/user', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

export default app;
