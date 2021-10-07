import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();

const app: Application = express();

const PORT: number = Number.parseInt(process.env.PORT || '8000');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'reached the home endpoint of oauth2 server' });
});
