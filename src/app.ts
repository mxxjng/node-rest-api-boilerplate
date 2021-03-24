import express from 'express';

import testRoute from './routes/test';

const app = express();

app.use(express.json());

app.use('/api/v1/test', testRoute);

app.listen(5000, () => {
  console.log('Server running on Port 5000');
});
