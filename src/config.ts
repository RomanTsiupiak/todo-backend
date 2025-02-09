export const config = {
  port: parseInt(process.env.PORT || "3000"),
  dbHost: process.env.DB_HOST ?? "",
};
