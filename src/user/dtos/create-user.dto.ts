/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsString()
  address: string;

  @IsString()
  password: string;

  @IsString()
  contact: string;

  @IsString()
  membershipType: string;
}
