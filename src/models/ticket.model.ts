import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
  title: String,
  status: String,
});

export const Ticket = model("ticket", ticketSchema);
