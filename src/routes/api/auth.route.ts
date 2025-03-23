import express from "express";

import { validateBody } from "@/middlewares";
import { registerSchema, loginSchema, refreshSchema } from "@/schemas";
import { userController } from "@/controllers";

export const router = express.Router();

router.post("/register", validateBody(registerSchema), userController.register);

router.post("/login", validateBody(loginSchema), userController.login);

router.post("/refresh", validateBody(refreshSchema), userController.login);
