import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";

import { httpError } from "@/utils";

export const isValidId = (req: Request, _: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) next(httpError(400, `${id} is not valid id`));

  next();
};
