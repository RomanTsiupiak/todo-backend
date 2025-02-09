import mongoose from "mongoose";

import { envConfig } from "./configs";
import { app } from "./app";

mongoose.set({ strictQuery: true });

mongoose
  .connect(envConfig.dbHost)
  .then(() => app.listen(envConfig.port))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
