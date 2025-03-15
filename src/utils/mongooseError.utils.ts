import { ErrorHandlingMiddlewareFunction, mongo } from "mongoose";

import { HttpErrorType } from "@/types";

export const mongooseError: ErrorHandlingMiddlewareFunction = (
  error,
  _,
  next
) => {
  const errorResponse = error as HttpErrorType;

  if (error instanceof mongo.MongoServerError && error.code === 11000) {
    errorResponse.status = 409;
  } else {
    errorResponse.status = 400;
  }

  next();
};
