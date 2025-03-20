import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Ticket = model("ticket", ticketSchema);
