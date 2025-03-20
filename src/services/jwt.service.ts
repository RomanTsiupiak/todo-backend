import jwt from "jsonwebtoken";

import { envConfig } from "@/configs";
import { JwtData } from "@/types";

export const generateToken = (id: string): string =>
  jwt.sign({ id }, envConfig.secretKey, { expiresIn: "12h" });

export const verifyToken = (token: string): JwtData | null => {
  try {
    return jwt.verify(token, envConfig.secretKey) as JwtData;
  } catch {
    return null;
  }
};
