import mongoose from "mongoose";

import { config } from "./config";
import { app } from "./app";

mongoose.set({ strictQuery: true });

mongoose
  .connect(config.dbHost)
  .then(() => app.listen(config.port))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
