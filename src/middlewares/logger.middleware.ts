import { pinoHttp } from "pino-http";
import { logger } from "../config/logger";

export const httplogger = pinoHttp({
  logger,
});
