import { Response, Request } from "express";

import { controllerWrapper, httpError } from "@/utils";
import { User } from "@/models";
import {
  createHashPassword,
  compareHashPasswords,
  generateTokenPair,
  verifyToken,
} from "@/services";

const register = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    throw httpError(409, "Email already in use");
  }

  const hashedPassword = await createHashPassword(req.body.password);

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  res.status(201).json(newUser);
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) throw httpError(400, "Incorrect email or password");

  const isValidPassword = compareHashPasswords(password, user?.password);

  if (!isValidPassword) throw httpError(400, "Incorrect email or password");

  const tokens = generateTokenPair(user.id);

  res.status(200).json({ ...tokens });
};

const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  const tokenData = verifyToken(refreshToken);

  if (!tokenData) throw httpError(401, "Invalid refresh token");

  const tokens = generateTokenPair(tokenData.id);

  res.status(200).json({ ...tokens });
};

export const userController = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  refresh: controllerWrapper(refresh),
};
