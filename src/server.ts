import "dotenv/config";
import app from "./app";
import { env } from "./config/env";
import { logger } from "./config";
import { connectDatabase, disconnectDatabase } from "./config/database";
import http from "node:http";

const server = http.createServer(app);
const gracefulShutdown = async (signal: string): Promise<void> => {
  logger.info(`${signal} received. Shutting down gracefully ...`);

  server.close(async () => {
    await disconnectDatabase();

    logger.info("Server stopped ...");
    process.exit(0);
  });
};

process.on("SIGINT", () => {
  void gracefulShutdown("SIGINT");
});

process.on("SIGNTERM", () => {
  void gracefulShutdown("SIGNTERM");
});

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server is running successfully on ${PORT}`);
});
