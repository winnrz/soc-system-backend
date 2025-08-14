import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, IsEnum, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEnum(Role)
  role: Role;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be at least 8 characters long, contain uppercase, lowercase, number, and special character.',
    },
  )
  password: string;
}

