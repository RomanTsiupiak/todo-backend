import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Ticket = model("ticket", ticketSchema);
