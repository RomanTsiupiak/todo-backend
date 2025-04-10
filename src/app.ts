import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "dotenv/config";

import { router as authRouter } from "./routes/api/auth.route";
import { router as ticketRouter } from "./routes/api/tickets.route";
import { router as meRouter } from "./routes/api/me.route";
import { HttpErrorType } from "./types";
import { auth } from "./middlewares";

export const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

app.use("/api/me", auth, meRouter);

app.use("/api/tickets", auth, ticketRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

/* eslint-disable @typescript-eslint/no-unused-vars */
app.use(
  (err: HttpErrorType, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
  }
);
