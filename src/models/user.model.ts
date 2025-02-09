import { Schema, model } from "mongoose";

import { emailRegex } from "@/utils";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: emailRegex,
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = model("user", userSchema);
