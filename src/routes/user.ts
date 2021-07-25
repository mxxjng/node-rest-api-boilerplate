import * as express from 'express';
import { getUsers, insertUser, getSingleUser } from '../controllers/user';

const router = express.Router();

router.get('/', getUsers);
router.post('/', insertUser);
router.get('/:id', getSingleUser);

export default router;
