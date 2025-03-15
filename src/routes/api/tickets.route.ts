import express from "express";

import { ticketsController } from "@/controllers";
import { validateBody } from "@/middlewares";
import { ticketSchema } from "@/schemas";

export const router = express.Router();

router.get("/", ticketsController.getAll);

router.post("/", validateBody(ticketSchema), ticketsController.create);
