import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError";
import { Request, Response, NextFunction } from "express";

export const NotFound = (req: Request, _res: Response, next: NextFunction) => {
  next(new ApiError(StatusCodes.NOT_FOUND, "Route Not Found"));
};
