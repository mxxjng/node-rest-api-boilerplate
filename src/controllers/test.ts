import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Express {
  req: Request;
  res: Response;
}

export const Test = async ({ req, res }: Express) => {
  const user = await prisma.user.findMany();
  res.json(user);
};
