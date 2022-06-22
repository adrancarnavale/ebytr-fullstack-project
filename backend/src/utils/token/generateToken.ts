import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from '../../entities/IUser';
import { CustomError } from '../CustomError';

const { JWT_SECRET } = process.env;

export function generateToken(data: IUser): string {
  const token = jwt.sign({ data }, JWT_SECRET as string, { expiresIn: '365d' });

  return token;
}
