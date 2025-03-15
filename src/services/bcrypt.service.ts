import bcrypt from "bcrypt";

export const createHashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

export const compareHashPasswords = async (password: string, hash: string) =>
  await bcrypt.compare(password, hash);
