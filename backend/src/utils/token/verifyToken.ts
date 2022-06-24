import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

const { JWT_SECRET } = process.env;

export function verifyToken(token: string): JwtPayload {
  const decoded = jwt.verify(token, JWT_SECRET as string);

  return decoded as JwtPayload;
}
