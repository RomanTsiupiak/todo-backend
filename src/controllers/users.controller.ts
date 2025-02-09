import { Response, Request } from "express";

import { User } from "@/models/user.model";

export const getAll = async (req: Request, res: Response) => {
  const data = await User.find();
  res.json(data);
};
