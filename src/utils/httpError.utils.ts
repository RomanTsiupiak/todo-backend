import { HttpErrorType } from "@/types";

export const httpError = (status: number, message: string): HttpErrorType => {
  const error = new Error(message) as HttpErrorType;
  error.status = status;

  return error;
};
