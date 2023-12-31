import jwt from 'jsonwebtoken';
import {Users} from '../interfaces/user.interface';
import Token from "../interfaces/token.interface";

export const createToken = (user: Users): string => {
  return jwt.sign(user, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: '1d',
  });
};

export const verifyToken = async (
  token: string
): Promise<jwt.VerifyErrors | Token> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET as jwt.Secret,
      (err, payload) => {
        if (err) return reject(err);

        resolve(payload as Token);
      }
    );
  });
};

export default { createToken, verifyToken };