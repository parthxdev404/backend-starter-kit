import "dotenv/config";
import http from "node:http";

import app from "./app";
import { env } from "./config";
import { logger } from "./config";
import { connectDatabase, disconnectDatabase } from "./config/database";

const server = http.createServer(app);

const bootstrap = async (): Promise<void> => {
  try {
    await connectDatabase();

    server.listen(env.PORT, () => {
      logger.info(
        {
          port: env.PORT,
          environment: env.NODE_ENV,
        },
        "Server started successfully",
      );
    });
  } catch (error) {
    logger.fatal({ err: error }, "Failed to bootstrap application");
    process.exit(1);
  }
};

const gracefulShutdown = async (signal: string): Promise<void> => {
  logger.info(`${signal} received. Shutting down gracefully...`);

  if (!server.listening) {
    await disconnectDatabase();

    logger.info("Application stopped");
    process.exit(0);
  }

  server.close(async () => {
    try {
      await disconnectDatabase();

      logger.info("Server stopped successfully");
      process.exit(0);
    } catch (error) {
      logger.error({ err: error }, "Error during graceful shutdown");
      process.exit(1);
    }
  });
};

process.on("SIGINT", () => {
  void gracefulShutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void gracefulShutdown("SIGTERM");
});

void bootstrap();
