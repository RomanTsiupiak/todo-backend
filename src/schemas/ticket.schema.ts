import Joi from "joi";

export const ticketSchema = Joi.object({
  title: Joi.string().max(255).required(),
});
