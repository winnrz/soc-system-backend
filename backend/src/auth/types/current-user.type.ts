import { Role } from "@prisma/client";

export interface CurrentUser {
  userId: number;
  email: string;
  role: Role;
}