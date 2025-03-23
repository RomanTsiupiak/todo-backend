import jwt from "jsonwebtoken";

import { envConfig } from "@/configs";
import { JwtData } from "@/types";

export const generateTokenPair = (id: string) => ({
  access: jwt.sign({ id }, envConfig.secretKey, { expiresIn: "1h" }),
  refresh: jwt.sign({ id }, envConfig.secretKey, { expiresIn: "12h" }),
});

export const verifyToken = (token: string): JwtData | null => {
  try {
    return jwt.verify(token, envConfig.secretKey) as JwtData;
  } catch {
    return null;
  }
};
