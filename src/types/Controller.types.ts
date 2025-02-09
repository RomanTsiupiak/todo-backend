import { Response, Request, NextFunction } from "express";

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
