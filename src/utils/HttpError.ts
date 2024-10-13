import { HttpErrorType } from '@/types';
import { Response, Request, NextFunction } from 'express';

export const HttpError = (message: string, status: number): HttpErrorType => {
  const error = new Error(message) as HttpErrorType;
  error.status = status;
  return error;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorHandler = (err: HttpErrorType, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
};
