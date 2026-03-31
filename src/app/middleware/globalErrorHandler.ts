/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import status from "http-status";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (envVars.NODE_ENV === "development") {
    console.log(`Error From Global Error Handler`, err);
  }

  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Internal Server Error";
  res.status(500).json({
    success: false,
    message: message,
    error: err.message,
  });
};
