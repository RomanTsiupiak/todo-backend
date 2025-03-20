import { HttpErrorType } from "@/types";

// TODO: add common messages according to status and ability to add custom message
export const httpError = (status: number, message = ""): HttpErrorType => {
  const error = new Error(message) as HttpErrorType;
  error.status = status;

  return error;
};
