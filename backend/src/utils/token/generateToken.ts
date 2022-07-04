import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from '@entities';

const { JWT_SECRET } = process.env;

export class GenerateToken {
  async generate(data: IUser): Promise<string> {
    const token = jwt.sign({ data }, JWT_SECRET as string, {
      expiresIn: '365d',
    });

    return token;
  }
}
