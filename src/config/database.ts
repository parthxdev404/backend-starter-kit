import mongoose from "mongoose";

import { env, logger } from "./";

const MAX_RETRIES = 3;
const RETRY_DELAY = 5000;

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const registerConnectionEvents = (): void => {
  mongoose.connection.on("disconnected", () => {
    logger.warn("MongoDB disconnected");
  });

  mongoose.connection.on("reconnected", () => {
    logger.info("MongoDB reconnected");
  });

  mongoose.connection.on("error", (error) => {
    logger.error({ err: error }, "MongoDB connection error");
  });
};

export const connectDatabase = async (): Promise<void> => {
  let attempt = 1;

  while (attempt <= MAX_RETRIES) {
    try {
      await mongoose.connect(env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10,
      });

      registerConnectionEvents();

      logger.info("MongoDB connected successfully");

      return;
    } catch (error) {
      logger.warn(
        {
          err: error,
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

      logger.info({ retryIn: `${RETRY_DELAY / 1000}s` }, "Retrying MongoDB connection...");

      await sleep(RETRY_DELAY);
    }
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  if (mongoose.connection.readyState === 0) {
    logger.info("MongoDB is already disconnected");
    return;
  }

  try {
    await mongoose.connection.close();

    logger.info("MongoDB connection closed");
  } catch (error) {
    logger.error({ err: error }, "Error while closing MongoDB connection");
  }
};
