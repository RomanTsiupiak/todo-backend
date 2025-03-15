import jwt from "jsonwebtoken";

import { envConfig } from "@/configs";

export const generateToken = (id: string) =>
  jwt.sign({ id }, envConfig.secretKey, { expiresIn: "12h" });

export const decodeToken = (token: string) => jwt.decode(token);

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, envConfig.secretKey);
  } catch {
    return null;
  }
};
