import jwt, { JsonWebTokenError, Jwt, JwtPayload, Secret } from 'jsonwebtoken';
import 'dotenv./config';
import { CustomError } from '../CustomError';

const { JWT_SECRET } = process.env;

export function verifyToken(token: string): JwtPayload {
  const decoded = jwt.verify(token, JWT_SECRET as string);

  return decoded as JwtPayload;
}
