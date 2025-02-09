import { Response, Request } from "express";

import { Ticket } from "@/models/ticket.model";

export const getAll = async (req: Request, res: Response) => {
  const data = await Ticket.find();
  res.json(data);
};
