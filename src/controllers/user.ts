import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import * as Joi from 'joi';

import HttpException from '../utils/HTTPException';

const userSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
});

const prisma = new PrismaClient();

// @desc      Get all users
// @route     GET /api/v1/user
// @access    Public
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(new HttpException(500, 'Internal Server Error'));
  }
};

// @desc      create a user
// @route     POST /api/v1/user
// @access    Public
export const insertUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email } = req.body;

  try {
    const { error } = userSchema.validate({ name: name, email: email });

    if (error) {
      return res.send('Wrong input data');
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    next(new HttpException(500, 'Internal Server Error'));
  }
};

// @desc      Get Single User
// @route     GET /api/v1/user/:id
// @access    Public
export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return next(new HttpException(404, 'No User with this id.'));
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(new HttpException(500, 'Internal Server Error'));
  }
};
