import type { UserRole } from "../types/user.types";

export class CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role?: UserRole;
}
