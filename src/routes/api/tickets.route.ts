import express from "express";

import { getAll } from "@/controllers/tickets.controller";
import { controllerWrapper } from "@/utils";

export const router = express.Router();

router.get("/", controllerWrapper(getAll));
