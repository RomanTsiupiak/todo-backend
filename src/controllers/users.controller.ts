import { Response, Request } from "express";

import { controllerWrapper, httpError } from "@/utils";
import { User } from "@/models";

const create = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    throw httpError(409, "Email already in use");
  }

  const newUser = await User.create(req.body);

  res.status(201).json(newUser);
};

export const userController = {
  create: controllerWrapper(create),
};
