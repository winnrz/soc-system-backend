import { Role } from '@prisma/client';

export interface JwtPayload {
  sub: number; // userId
  email: string;
  role: Role;
}
