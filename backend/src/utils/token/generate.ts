import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUser } from '../../entities/IUser';
import { CustomError } from '../CustomError';

const { JWT_SECRET } = process.env;

export async function generate(data: IUser): Promise<void> {
  const token = jwt.sign(
    { data },
    JWT_SECRET as string,
    { expiresIn: '365d' },
    function (err, t) {
      if (err)
        throw new CustomError(500, 'Internal server Error - token.generate');
      return t;
    }
  );

  return token;
}
