import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routes";
import { globalErrorHandler } from "./middlewares/error.middleware";
import { config } from "./config/config";

// Development - npm run dev
// Production - npm run build & npm start

const app = express();

app.use(
  cors({
    credentials: true,
    origin: config.frontendUrl,
  }),
);

app.use(cookieParser());
app.use(express.json());

// ALL ROUTES
app.use("/api/v1/", router);

// Global error handler (MUST be after all routes)
app.use(globalErrorHandler);

app.get("/", (_, res) => {
  res.json({
    message: "Welcome to BookMyScreen API",
  });
});

export default app;
