import express from "express";
import healthRoutes from "./routes/health.routes";
import { httplogger } from "./middlewares/logger.middleware";
import { NotFound } from "./utils/not-found-error";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(httplogger);
app.use("/", healthRoutes);
app.use(NotFound);
app.use(errorMiddleware);

export default app;
