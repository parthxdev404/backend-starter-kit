import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ApiError } from "../utils";
import { logger } from "../config";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error({
    err: error,
    method: req.method,
    url: req.originalUrl,
  });

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      errors: error.errors ?? null,
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal Server Error",
  });
};
