import { JwtPayload } from "jsonwebtoken";

export type JwtData = { id: string } & JwtPayload;
