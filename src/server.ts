import "dotenv/config";
import app from "./app";
import { env } from "./config/env";
import { logger } from "./config";

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server is running successfully on ${PORT}`);
});
