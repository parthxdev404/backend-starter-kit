import express from "express";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", healthRoutes);

export default app;
