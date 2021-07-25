import * as express from 'express';
import { getUsers, insertUser, getSingleUser } from '../controllers/user';

const router = express.Router();

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: get a list of all users
 *     description: get a list of all users
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/v1/user/:id:
 *   get:
 *     summary: gets a single user by id
 *     description: gets a single user by id
 */
router.get('/:id', getSingleUser);

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: create a user
 *     description: creates a user
 */
router.post('/', insertUser);

export default router;
