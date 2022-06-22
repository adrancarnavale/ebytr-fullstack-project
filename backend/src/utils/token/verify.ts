import jwt, { JsonWebTokenError, JwtPayload, Secret } from 'jsonwebtoken';
import 'dotenv./config';
import { CustomError } from '../CustomError';

const { JWT_SECRET } = process.env;

export async function verify(token: string): Promise<void> {
  const decoded = jwt.verify(token, JWT_SECRET as string, function (err, data) {
    if (err) throw new CustomError(500, 'Internal server Error - token.verify');
    return data;
  });

  return decoded;
}
