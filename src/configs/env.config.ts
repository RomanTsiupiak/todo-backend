export const envConfig = Object.freeze({
  port: parseInt(process.env.PORT || "3000"),
  dbHost: process.env.DB_HOST ?? "",
  secretKey: process.env.SECRET_KEY || "",
});
