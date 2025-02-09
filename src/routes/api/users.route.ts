import express from "express";

import { controllerWrapper } from "@/utils";
import { getAll } from "@/controllers/users.controller";

export const router = express.Router();

router.get("/", controllerWrapper(getAll));
