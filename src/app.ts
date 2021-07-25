import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import userRoutes from './routes/user';
import { errorHandler } from './middleware/error';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['**/*.ts'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1/user', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

export default app;
