import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod/v3";
import { ApiError } from "../utils";
import { StatusCodes } from "http-status-codes";

type ValidateSchema = {
  body?: AnyZodObject;
  params?: AnyZodObject;
  query?: AnyZodObject;
  headers?: AnyZodObject;
};

export const validate =
  (schemas: ValidateSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }
      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }
      if (schemas.query) {
        req.query = schemas.query.parse(req.query);
      }
      if (schemas.headers) {
        req.headers = schemas.headers.parse(req.headers);
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Validation failed", error.issues);
      }

      next(error);
    }
  };
