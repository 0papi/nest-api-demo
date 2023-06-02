/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateMembershipDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  membershipType: string;

  @IsNumber()
  fee: number;
}
