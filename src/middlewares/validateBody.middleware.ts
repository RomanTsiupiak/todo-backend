import Joi from "joi";
import { Request, Response, NextFunction } from "express";

import { httpError } from "@/utils";

export const validateBody =
  (schema: Joi.ObjectSchema<unknown>) =>
  (req: Request, _: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) next(httpError(400, error.message));

    next();
  };
