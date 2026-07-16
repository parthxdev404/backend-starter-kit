import mongoose from "mongoose";

import { env, logger } from "./";

const MAX_RETRIES = 3;
const RETRY_DELAY = 5000;

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export const connectDatabase = async (): Promise<void> => {
  let attempt = 1;

  while (attempt <= MAX_RETRIES) {
    try {
      await mongoose.connect(env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10,
      });

      logger.info("MongoDB connected successfully");

      mongoose.connection.on("disconnected", () => {
        logger.warn("MongoDB disconnected");
      });

      mongoose.connection.on("reconnected", () => {
        logger.info("MongoDB reconnected");
      });

      mongoose.connection.on("error", (error) => {
        logger.error({ err: error }, "MongoDB connection error");
      });

      return;
    } catch (error) {
      logger.warn(
        {
          attempt,
          maxRetries: MAX_RETRIES,
        },
        "MongoDB connection failed",
      );

      if (attempt === MAX_RETRIES) {
        logger.fatal({ err: error }, "Maximum database connection attempts reached");

        process.exit(1);
      }

      attempt++;

      await sleep(RETRY_DELAY);
    }
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connection.close();

    logger.info("MongoDB connection closed");
  } catch (error) {
    logger.error({ err: error }, "Error while closing MongoDB connection");
  }
};
