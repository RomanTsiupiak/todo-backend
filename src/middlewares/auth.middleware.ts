import { Request, Response, NextFunction } from "express";

import { verifyToken } from "@/services";
import { httpError } from "@/utils";
import { User } from "@/models";

export const auth = async (req: Request, _: Response, next: NextFunction) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") next(httpError(401));

  const tokenData = verifyToken(token);

  if (!tokenData) next(httpError(401));

  const user = await User.findById(tokenData?.id);

  if (!user) next(httpError(401));

  req.user = user;

  next();
};
