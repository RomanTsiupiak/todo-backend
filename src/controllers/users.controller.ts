import { Response, Request } from "express";

import { controllerWrapper, httpError } from "@/utils";
import { User } from "@/models";
import { createHashPassword, compareHashPasswords } from "@/services";

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

  // TODO: add tokens
};

export const userController = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
};
