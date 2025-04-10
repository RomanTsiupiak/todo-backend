import { Schema, model, InferSchemaType, Types } from "mongoose";

import { emailRegex, mongooseError } from "@/utils";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegex,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", mongooseError);

export type UserDTO = InferSchemaType<typeof userSchema> & {
  _id: Types.ObjectId;
};

export const User = model("user", userSchema);
