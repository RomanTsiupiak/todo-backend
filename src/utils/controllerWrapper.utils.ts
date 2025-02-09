import { Request, Response, NextFunction } from "express";
import { ControllerType } from "@/types";

export const controllerWrapper =
  (controller: ControllerType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
