import * as express from 'express';
import { Test } from '../controllers/test';

const router = express.Router();

router.get('/', Test);

export default router;
