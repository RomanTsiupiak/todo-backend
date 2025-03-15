import { Request, Response } from "express";

import { controllerWrapper } from "@/utils";
import { Ticket } from "@/models";

const getAll = async (_: Request, res: Response) => {
  const tickets = await Ticket.find();

  res.status(201).json(tickets);
};

const create = async (req: Request, res: Response) => {
  const newTicket = await Ticket.create(req.body);

  res.status(201).json(newTicket);
};

export const ticketsController = {
  getAll: controllerWrapper(getAll),
  create: controllerWrapper(create),
};
