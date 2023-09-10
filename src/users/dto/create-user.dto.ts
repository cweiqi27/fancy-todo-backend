import {
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { USER_ROLE, type UserRole } from '../types/user.types';
import { Transform, Type } from 'class-transformer';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsStrongPassword()
  password: string;

  @IsEnum(USER_ROLE)
  role?: UserRole;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dob?: Date;
}
