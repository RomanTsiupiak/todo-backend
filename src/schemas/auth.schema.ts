import Joi from "joi";

import { emailRegex } from "@/utils";

export const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .error(() => new Error("Invalid credentials")),
  password: Joi.string()
    .required()
    .error(() => new Error("Invalid credentials")),
});

export const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
