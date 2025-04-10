import express from "express";

import { userController } from "@/controllers";

export const router = express.Router();

router.get("/", userController.me);
