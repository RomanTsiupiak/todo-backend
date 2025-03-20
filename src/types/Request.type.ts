import { UserDTO } from "@/models";

declare module "express-serve-static-core" {
  interface Request {
    user?: UserDTO | null;
  }
}
