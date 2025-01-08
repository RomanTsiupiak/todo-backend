import express from "express";

import { config } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("todo res");
});

app.listen(config.port);
