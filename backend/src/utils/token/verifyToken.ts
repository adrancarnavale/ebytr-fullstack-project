import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';

const { JWT_SECRET } = process.env;

export class VerifyToken {
  async verify(token: string): Promise<JwtPayload> {
    const decoded = jwt.verify(token, JWT_SECRET as string);

    return decoded as JwtPayload;
  }
}
